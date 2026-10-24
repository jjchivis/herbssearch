import { NextResponse } from "next/server";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { getCurrentUser } from "@/lib/auth-guards";
import { prisma } from "@/lib/prisma";
import { imagePathPrefix, logoPathPrefix } from "@/lib/marketplace/products";

// Issues short-lived upload tokens for photos sent straight from the seller's
// browser to Vercel Blob. A token is only issued to the signed-in owner of an
// active store, for a path inside that store's own folder, for images of at
// most 5 MB. The photo is attached to the product afterwards by a server
// action that checks the same folder again.

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;
  try {
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        const user = await getCurrentUser();
        if (!user) throw new Error("Sign in to upload.");
        const seller = await prisma.seller.findUnique({ where: { userId: user.id } });
        if (!seller || seller.status !== "ACTIVE") throw new Error("Only active sellers can upload.");

        const { kind, productId } = JSON.parse(clientPayload ?? "{}") as { kind?: string; productId?: string };
        let prefix: string;
        if (kind === "logo") {
          prefix = logoPathPrefix(seller.id);
        } else {
          const product = productId
            ? await prisma.product.findFirst({ where: { id: productId, sellerId: seller.id }, select: { id: true } })
            : null;
          if (!product) throw new Error("Product not found.");
          prefix = imagePathPrefix(seller.id, product.id);
        }
        if (!pathname.startsWith(prefix) || pathname.includes("..")) throw new Error("Upload path not allowed.");

        return {
          allowedContentTypes: ["image/jpeg", "image/png", "image/webp"],
          maximumSizeInBytes: 5 * 1024 * 1024,
          addRandomSuffix: true,
        };
      },
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
