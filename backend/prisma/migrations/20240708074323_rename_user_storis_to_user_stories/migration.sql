/*
  Warnings:

  - You are about to drop the `userStoris` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "userStoris" DROP CONSTRAINT "userStoris_userId_fkey";

-- DropTable
DROP TABLE "userStoris";

-- CreateTable
CREATE TABLE "userStories" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "userStories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userStories" ADD CONSTRAINT "userStories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
