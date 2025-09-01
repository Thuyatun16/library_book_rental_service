-- CreateTable
CREATE TABLE "public"."RentalSnapshot" (
    "id" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rentedAt" TIMESTAMP(3) NOT NULL,
    "availability" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RentalSnapshot_pkey" PRIMARY KEY ("id")
);
