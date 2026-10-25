import type Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { cancelCheckout, fulfillCheckout } from "@/lib/marketplace/orders";

// Stripe calls this after payment events. Every request's signature is
// checked against STRIPE_WEBHOOK_SECRET, so nobody else can mark orders paid.
// An event already handled is acknowledged and skipped.

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");
  if (!secret || !signature) return new Response("Not configured", { status: 400 });

  let event: Stripe.Event;
  try {
    event = stripe().webhooks.constructEvent(await request.text(), signature, secret);
  } catch {
    return new Response("Bad signature", { status: 400 });
  }

  if (await prisma.stripeEvent.findUnique({ where: { id: event.id } })) return Response.json({ received: true, duplicate: true });

  switch (event.type) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_succeeded":
      await fulfillCheckout(event.data.object.id);
      break;
    case "checkout.session.expired":
    case "checkout.session.async_payment_failed":
      await cancelCheckout(event.data.object.id);
      break;
  }

  // Recorded only after the work succeeds; if it throws, Stripe retries.
  await prisma.stripeEvent.upsert({ where: { id: event.id }, create: { id: event.id, type: event.type }, update: {} });
  return Response.json({ received: true });
}
