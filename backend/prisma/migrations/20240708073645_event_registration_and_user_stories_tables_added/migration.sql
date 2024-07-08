/*
  Warnings:

  - You are about to drop the column `registration_fee` on the `events` table. All the data in the column will be lost.
  - Added the required column `registrationFee` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" DROP COLUMN "registration_fee",
ADD COLUMN     "registrationFee" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "eventRegistrations" (
    "eventId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "eventRegistrations_pkey" PRIMARY KEY ("eventId","userId")
);

-- CreateTable
CREATE TABLE "userStoris" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "userStoris_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "eventRegistrations" ADD CONSTRAINT "eventRegistrations_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventRegistrations" ADD CONSTRAINT "eventRegistrations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userStoris" ADD CONSTRAINT "userStoris_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
