-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isMember" BOOLEAN NOT NULL,
    "membershipTier" TEXT NOT NULL DEFAULT '',
    "balance" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "adminname" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "eventname" TEXT NOT NULL,
    "registration_fee" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donations" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "donations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "admin_adminname_key" ON "admin"("adminname");

-- AddForeignKey
ALTER TABLE "donations" ADD CONSTRAINT "donations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
