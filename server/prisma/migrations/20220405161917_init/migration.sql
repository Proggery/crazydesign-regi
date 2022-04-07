/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `account` ADD COLUMN `password` VARCHAR(45) NOT NULL,
    ADD COLUMN `username` VARCHAR(45) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `username` ON `account`(`username`);
