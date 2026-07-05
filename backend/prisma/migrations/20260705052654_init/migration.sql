-- CreateEnum
CREATE TYPE "CollectionStatus" AS ENUM ('DRAFT', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "LookImageType" AS ENUM ('HERO', 'LINEUP', 'DEVELOPMENT', 'MODEL', 'FINAL_VIEWS', 'PROCESS', 'DETAIL');

-- CreateEnum
CREATE TYPE "PriceStatus" AS ENUM ('CONFIRMED', 'TO_BE_FINALISED', 'PRICE_ON_REQUEST');

-- CreateEnum
CREATE TYPE "SkillType" AS ENUM ('SKILL', 'CREATIVE_INTEREST');

-- CreateEnum
CREATE TYPE "EnquiryStatus" AS ENUM ('NEW', 'READ', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "EnquiryInterestType" AS ENUM ('INTERNSHIP', 'COLLABORATION', 'COMMISSION', 'STYLING', 'PORTFOLIO_VIEWING', 'PRICING', 'OTHER');

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "subtitle" TEXT,
    "description" TEXT NOT NULL,
    "heroImageUrl" TEXT,
    "lineupImageUrl" TEXT,
    "brandImageUrl" TEXT,
    "status" "CollectionStatus" NOT NULL DEFAULT 'PUBLISHED',
    "displayOrder" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Look" (
    "id" TEXT NOT NULL,
    "collectionId" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subtitle" TEXT,
    "description" TEXT NOT NULL,
    "concept" TEXT,
    "designDevelopment" TEXT,
    "problemsAndImprovements" TEXT,
    "outcomeAndReflection" TEXT,
    "displayOrder" INTEGER NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Look_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LookImage" (
    "id" TEXT NOT NULL,
    "lookId" TEXT NOT NULL,
    "type" "LookImageType" NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "caption" TEXT,
    "displayOrder" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LookImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LookMaterial" (
    "id" TEXT NOT NULL,
    "lookId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LookMaterial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LookTag" (
    "id" TEXT NOT NULL,
    "lookId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LookTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Garment" (
    "id" TEXT NOT NULL,
    "lookId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fabric" TEXT NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Garment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GarmentCosting" (
    "id" TEXT NOT NULL,
    "garmentId" TEXT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'LKR',
    "fabricUsage" TEXT NOT NULL,
    "fabricPricePerYard" DECIMAL(10,2),
    "fabricPricePerYardStatus" "PriceStatus" NOT NULL DEFAULT 'CONFIRMED',
    "fabricCost" DECIMAL(10,2),
    "fabricCostStatus" "PriceStatus" NOT NULL DEFAULT 'CONFIRMED',
    "batikOrDyeCost" DECIMAL(10,2),
    "sewingCost" DECIMAL(10,2),
    "trimsCost" DECIMAL(10,2),
    "finishingCost" DECIMAL(10,2),
    "totalProductionCost" DECIMAL(10,2),
    "totalProductionCostStatus" "PriceStatus" NOT NULL DEFAULT 'CONFIRMED',
    "profitMarginPercent" DECIMAL(5,2),
    "profitMarginStatus" "PriceStatus" NOT NULL DEFAULT 'CONFIRMED',
    "finalSellingPrice" DECIMAL(10,2),
    "finalSellingPriceStatus" "PriceStatus" NOT NULL DEFAULT 'CONFIRMED',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GarmentCosting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcessItem" (
    "id" TEXT NOT NULL,
    "collectionId" TEXT NOT NULL,
    "number" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "imageAlt" TEXT,
    "category" TEXT,
    "displayOrder" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProcessItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DesignerProfile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "portraitUrl" TEXT,
    "quote" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "linkedinUrl" TEXT,
    "location" TEXT,
    "portfolioPdfUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DesignerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "designerProfileId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "type" "SkillType" NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SiteSetting" (
    "id" TEXT NOT NULL,
    "siteTitle" TEXT NOT NULL,
    "siteDescription" TEXT NOT NULL,
    "logoUrl" TEXT,
    "faviconUrl" TEXT,
    "contactEmail" TEXT NOT NULL,
    "contactPhone" TEXT,
    "linkedinUrl" TEXT,
    "portfolioPdfUrl" TEXT,
    "location" TEXT,
    "copyrightText" TEXT,
    "seasonLabel" TEXT,
    "collectionName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SiteSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enquiry" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "subject" TEXT,
    "message" TEXT NOT NULL,
    "interestType" "EnquiryInterestType" NOT NULL DEFAULT 'OTHER',
    "status" "EnquiryStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Enquiry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_slug_key" ON "Collection"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Look_slug_key" ON "Look"("slug");

-- CreateIndex
CREATE INDEX "Look_collectionId_displayOrder_idx" ON "Look"("collectionId", "displayOrder");

-- CreateIndex
CREATE UNIQUE INDEX "Look_collectionId_number_key" ON "Look"("collectionId", "number");

-- CreateIndex
CREATE INDEX "LookImage_lookId_type_displayOrder_idx" ON "LookImage"("lookId", "type", "displayOrder");

-- CreateIndex
CREATE INDEX "LookMaterial_lookId_displayOrder_idx" ON "LookMaterial"("lookId", "displayOrder");

-- CreateIndex
CREATE INDEX "LookTag_lookId_displayOrder_idx" ON "LookTag"("lookId", "displayOrder");

-- CreateIndex
CREATE INDEX "Garment_lookId_displayOrder_idx" ON "Garment"("lookId", "displayOrder");

-- CreateIndex
CREATE UNIQUE INDEX "GarmentCosting_garmentId_key" ON "GarmentCosting"("garmentId");

-- CreateIndex
CREATE INDEX "ProcessItem_collectionId_displayOrder_idx" ON "ProcessItem"("collectionId", "displayOrder");

-- CreateIndex
CREATE INDEX "Skill_designerProfileId_type_displayOrder_idx" ON "Skill"("designerProfileId", "type", "displayOrder");

-- AddForeignKey
ALTER TABLE "Look" ADD CONSTRAINT "Look_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LookImage" ADD CONSTRAINT "LookImage_lookId_fkey" FOREIGN KEY ("lookId") REFERENCES "Look"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LookMaterial" ADD CONSTRAINT "LookMaterial_lookId_fkey" FOREIGN KEY ("lookId") REFERENCES "Look"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LookTag" ADD CONSTRAINT "LookTag_lookId_fkey" FOREIGN KEY ("lookId") REFERENCES "Look"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Garment" ADD CONSTRAINT "Garment_lookId_fkey" FOREIGN KEY ("lookId") REFERENCES "Look"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GarmentCosting" ADD CONSTRAINT "GarmentCosting_garmentId_fkey" FOREIGN KEY ("garmentId") REFERENCES "Garment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcessItem" ADD CONSTRAINT "ProcessItem_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_designerProfileId_fkey" FOREIGN KEY ("designerProfileId") REFERENCES "DesignerProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
