-- CreateEnum
CREATE TYPE "GiftReceivedStatus" AS ENUM ('PAID', 'CANCELED', 'PENDING');

-- CreateTable
CREATE TABLE "Wedding" (
    "id" TEXT NOT NULL,
    "bride" TEXT NOT NULL,
    "brideMother" TEXT NOT NULL,
    "brideFather" TEXT NOT NULL,
    "groom" TEXT NOT NULL,
    "groomMother" TEXT NOT NULL,
    "groomFather" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "month" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "mapsUrl" TEXT NOT NULL,
    "reception" TEXT NOT NULL,

    CONSTRAINT "Wedding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "escorts" INTEGER NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gift" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "imgUrl" TEXT NOT NULL,

    CONSTRAINT "Gift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GiftReceived" (
    "id" TEXT NOT NULL,
    "status" "GiftReceivedStatus" NOT NULL DEFAULT 'PENDING',
    "transactionId" VARCHAR(255),
    "total" DECIMAL(10,2) NOT NULL,
    "guestName" TEXT NOT NULL,
    "message" VARCHAR(255),
    "giftId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GiftReceived_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GiftReceived" ADD CONSTRAINT "GiftReceived_giftId_fkey" FOREIGN KEY ("giftId") REFERENCES "Gift"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
