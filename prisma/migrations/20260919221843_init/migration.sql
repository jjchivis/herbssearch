-- CreateTable
CREATE TABLE "Herb" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "scientificName" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "uses" TEXT NOT NULL,
    "properties" TEXT NOT NULL,
    "cautions" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Herb_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Herb_name_key" ON "Herb"("name");

-- CreateIndex
CREATE INDEX "Herb_name_idx" ON "Herb"("name");

-- CreateIndex
CREATE INDEX "Herb_category_idx" ON "Herb"("category");
