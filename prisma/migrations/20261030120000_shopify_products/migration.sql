-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "shopifyProductId" TEXT,
ADD COLUMN     "shopifySyncedAt" TIMESTAMP(3),
ADD COLUMN     "shopifyVariantId" TEXT;

-- AlterTable
ALTER TABLE "MarketplaceSettings" ADD COLUMN     "shopifySellerId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Product_shopifyVariantId_key" ON "Product"("shopifyVariantId");
