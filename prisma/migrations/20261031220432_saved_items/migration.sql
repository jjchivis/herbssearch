-- CreateTable
CREATE TABLE "saved_item" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "herbId" TEXT,
    "productId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "saved_item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "saved_item_userId_idx" ON "saved_item"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "saved_item_userId_herbId_key" ON "saved_item"("userId", "herbId");

-- CreateIndex
CREATE UNIQUE INDEX "saved_item_userId_productId_key" ON "saved_item"("userId", "productId");

-- AddForeignKey
ALTER TABLE "saved_item" ADD CONSTRAINT "saved_item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_item" ADD CONSTRAINT "saved_item_herbId_fkey" FOREIGN KEY ("herbId") REFERENCES "Herb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_item" ADD CONSTRAINT "saved_item_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Each saved item points at exactly one herb or one product.
ALTER TABLE "saved_item" ADD CONSTRAINT "saved_item_one_target" CHECK (("herbId" IS NULL) <> ("productId" IS NULL));
