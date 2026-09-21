-- CreateEnum
CREATE TYPE "ContentStatus" AS ENUM ('DRAFT', 'RESEARCHING', 'VERIFIED', 'REVIEW_REQUIRED', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "SynonymType" AS ENUM ('SCIENTIFIC_SYNONYM', 'COMMON_NAME', 'REGIONAL_NAME', 'TRADITIONAL_NAME', 'HISTORICAL_NAME');

-- CreateEnum
CREATE TYPE "SourceTier" AS ENUM ('TIER_1_GOVERNMENT', 'TIER_2_SYSTEMATIC_REVIEW', 'TIER_3_PEER_REVIEWED', 'TIER_4_TRADITIONAL_TEXT', 'TIER_5_SECONDARY');

-- CreateEnum
CREATE TYPE "EvidenceCategory" AS ENUM ('TRADITIONAL', 'PRECLINICAL', 'HUMAN_RESEARCH');

-- CreateEnum
CREATE TYPE "SafetyCategory" AS ENUM ('CONTRAINDICATION', 'ADVERSE_EFFECT', 'DRUG_INTERACTION', 'PREGNANCY', 'BREASTFEEDING', 'SURGERY', 'TOXICITY', 'DOSAGE', 'ALLERGY', 'CONTAMINATION', 'PREPARATION_SPECIFIC');

-- AlterTable
ALTER TABLE "Herb" ADD COLUMN     "contentStatus" "ContentStatus" NOT NULL DEFAULT 'PUBLISHED',
ADD COLUMN     "family" TEXT,
ADD COLUMN     "genus" TEXT,
ADD COLUMN     "habitat" TEXT,
ADD COLUMN     "nativeRange" TEXT,
ADD COLUMN     "partsUsed" TEXT,
ADD COLUMN     "species" TEXT,
ADD COLUMN     "subspecies" TEXT;

-- CreateTable
CREATE TABLE "HerbSynonym" (
    "id" TEXT NOT NULL,
    "herbId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "SynonymType" NOT NULL,
    "language" TEXT,
    "region" TEXT,

    CONSTRAINT "HerbSynonym_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BodySystem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "BodySystem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Symptom" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "bodySystemId" TEXT,

    CONSTRAINT "Symptom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HerbSymptom" (
    "id" TEXT NOT NULL,
    "herbId" TEXT NOT NULL,
    "symptomId" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HerbSymptom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Constituent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" TEXT,
    "description" TEXT,

    CONSTRAINT "Constituent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HerbConstituent" (
    "id" TEXT NOT NULL,
    "herbId" TEXT NOT NULL,
    "constituentId" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "HerbConstituent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preparation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Preparation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HerbPreparation" (
    "id" TEXT NOT NULL,
    "herbId" TEXT NOT NULL,
    "preparationId" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "HerbPreparation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HerbalAction" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "HerbalAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HerbAction" (
    "id" TEXT NOT NULL,
    "herbId" TEXT NOT NULL,
    "actionId" TEXT NOT NULL,
    "sourceId" TEXT,

    CONSTRAINT "HerbAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TraditionSystem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "TraditionSystem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HerbTradition" (
    "id" TEXT NOT NULL,
    "herbId" TEXT NOT NULL,
    "traditionId" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "HerbTradition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Source" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT,
    "organization" TEXT,
    "publicationDate" TIMESTAMP(3),
    "journal" TEXT,
    "doi" TEXT,
    "pmid" TEXT,
    "url" TEXT,
    "sourceType" TEXT,
    "tier" "SourceTier" NOT NULL,
    "citationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvidenceEntry" (
    "id" TEXT NOT NULL,
    "herbId" TEXT NOT NULL,
    "category" "EvidenceCategory" NOT NULL,
    "summary" TEXT NOT NULL,
    "sourceId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EvidenceEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SafetyRecord" (
    "id" TEXT NOT NULL,
    "herbId" TEXT NOT NULL,
    "category" "SafetyCategory" NOT NULL,
    "description" TEXT NOT NULL,
    "sourceId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SafetyRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "HerbSynonym_herbId_idx" ON "HerbSynonym"("herbId");

-- CreateIndex
CREATE INDEX "HerbSynonym_name_idx" ON "HerbSynonym"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BodySystem_name_key" ON "BodySystem"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BodySystem_slug_key" ON "BodySystem"("slug");

-- CreateIndex
CREATE INDEX "BodySystem_slug_idx" ON "BodySystem"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Symptom_name_key" ON "Symptom"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Symptom_slug_key" ON "Symptom"("slug");

-- CreateIndex
CREATE INDEX "Symptom_slug_idx" ON "Symptom"("slug");

-- CreateIndex
CREATE INDEX "Symptom_bodySystemId_idx" ON "Symptom"("bodySystemId");

-- CreateIndex
CREATE INDEX "HerbSymptom_symptomId_idx" ON "HerbSymptom"("symptomId");

-- CreateIndex
CREATE UNIQUE INDEX "HerbSymptom_herbId_symptomId_key" ON "HerbSymptom"("herbId", "symptomId");

-- CreateIndex
CREATE UNIQUE INDEX "Constituent_name_key" ON "Constituent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Constituent_slug_key" ON "Constituent"("slug");

-- CreateIndex
CREATE INDEX "Constituent_slug_idx" ON "Constituent"("slug");

-- CreateIndex
CREATE INDEX "Constituent_type_idx" ON "Constituent"("type");

-- CreateIndex
CREATE INDEX "HerbConstituent_constituentId_idx" ON "HerbConstituent"("constituentId");

-- CreateIndex
CREATE UNIQUE INDEX "HerbConstituent_herbId_constituentId_key" ON "HerbConstituent"("herbId", "constituentId");

-- CreateIndex
CREATE UNIQUE INDEX "Preparation_name_key" ON "Preparation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Preparation_slug_key" ON "Preparation"("slug");

-- CreateIndex
CREATE INDEX "Preparation_slug_idx" ON "Preparation"("slug");

-- CreateIndex
CREATE INDEX "HerbPreparation_preparationId_idx" ON "HerbPreparation"("preparationId");

-- CreateIndex
CREATE UNIQUE INDEX "HerbPreparation_herbId_preparationId_key" ON "HerbPreparation"("herbId", "preparationId");

-- CreateIndex
CREATE UNIQUE INDEX "HerbalAction_name_key" ON "HerbalAction"("name");

-- CreateIndex
CREATE UNIQUE INDEX "HerbalAction_slug_key" ON "HerbalAction"("slug");

-- CreateIndex
CREATE INDEX "HerbalAction_slug_idx" ON "HerbalAction"("slug");

-- CreateIndex
CREATE INDEX "HerbAction_actionId_idx" ON "HerbAction"("actionId");

-- CreateIndex
CREATE UNIQUE INDEX "HerbAction_herbId_actionId_key" ON "HerbAction"("herbId", "actionId");

-- CreateIndex
CREATE UNIQUE INDEX "TraditionSystem_name_key" ON "TraditionSystem"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TraditionSystem_slug_key" ON "TraditionSystem"("slug");

-- CreateIndex
CREATE INDEX "TraditionSystem_slug_idx" ON "TraditionSystem"("slug");

-- CreateIndex
CREATE INDEX "HerbTradition_traditionId_idx" ON "HerbTradition"("traditionId");

-- CreateIndex
CREATE UNIQUE INDEX "HerbTradition_herbId_traditionId_key" ON "HerbTradition"("herbId", "traditionId");

-- CreateIndex
CREATE INDEX "Source_tier_idx" ON "Source"("tier");

-- CreateIndex
CREATE INDEX "Source_doi_idx" ON "Source"("doi");

-- CreateIndex
CREATE INDEX "Source_pmid_idx" ON "Source"("pmid");

-- CreateIndex
CREATE INDEX "EvidenceEntry_herbId_idx" ON "EvidenceEntry"("herbId");

-- CreateIndex
CREATE INDEX "EvidenceEntry_category_idx" ON "EvidenceEntry"("category");

-- CreateIndex
CREATE INDEX "SafetyRecord_herbId_idx" ON "SafetyRecord"("herbId");

-- CreateIndex
CREATE INDEX "SafetyRecord_category_idx" ON "SafetyRecord"("category");

-- CreateIndex
CREATE INDEX "Herb_family_idx" ON "Herb"("family");

-- AddForeignKey
ALTER TABLE "HerbSynonym" ADD CONSTRAINT "HerbSynonym_herbId_fkey" FOREIGN KEY ("herbId") REFERENCES "Herb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Symptom" ADD CONSTRAINT "Symptom_bodySystemId_fkey" FOREIGN KEY ("bodySystemId") REFERENCES "BodySystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HerbSymptom" ADD CONSTRAINT "HerbSymptom_herbId_fkey" FOREIGN KEY ("herbId") REFERENCES "Herb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HerbSymptom" ADD CONSTRAINT "HerbSymptom_symptomId_fkey" FOREIGN KEY ("symptomId") REFERENCES "Symptom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HerbConstituent" ADD CONSTRAINT "HerbConstituent_herbId_fkey" FOREIGN KEY ("herbId") REFERENCES "Herb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HerbConstituent" ADD CONSTRAINT "HerbConstituent_constituentId_fkey" FOREIGN KEY ("constituentId") REFERENCES "Constituent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HerbPreparation" ADD CONSTRAINT "HerbPreparation_herbId_fkey" FOREIGN KEY ("herbId") REFERENCES "Herb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HerbPreparation" ADD CONSTRAINT "HerbPreparation_preparationId_fkey" FOREIGN KEY ("preparationId") REFERENCES "Preparation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HerbAction" ADD CONSTRAINT "HerbAction_herbId_fkey" FOREIGN KEY ("herbId") REFERENCES "Herb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HerbAction" ADD CONSTRAINT "HerbAction_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "HerbalAction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HerbAction" ADD CONSTRAINT "HerbAction_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HerbTradition" ADD CONSTRAINT "HerbTradition_herbId_fkey" FOREIGN KEY ("herbId") REFERENCES "Herb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HerbTradition" ADD CONSTRAINT "HerbTradition_traditionId_fkey" FOREIGN KEY ("traditionId") REFERENCES "TraditionSystem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvidenceEntry" ADD CONSTRAINT "EvidenceEntry_herbId_fkey" FOREIGN KEY ("herbId") REFERENCES "Herb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvidenceEntry" ADD CONSTRAINT "EvidenceEntry_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SafetyRecord" ADD CONSTRAINT "SafetyRecord_herbId_fkey" FOREIGN KEY ("herbId") REFERENCES "Herb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SafetyRecord" ADD CONSTRAINT "SafetyRecord_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;
