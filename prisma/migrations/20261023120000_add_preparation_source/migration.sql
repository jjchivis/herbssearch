-- AlterTable
ALTER TABLE "HerbPreparation" ADD COLUMN     "sourceId" TEXT;

-- AddForeignKey
ALTER TABLE "HerbPreparation" ADD CONSTRAINT "HerbPreparation_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;
