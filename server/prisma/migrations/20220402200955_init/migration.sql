/*
  Warnings:

  - You are about to drop the column `file_name` on the `upload_images` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `upload_images` DROP COLUMN `file_name`,
    ADD COLUMN `img_alt` VARCHAR(45) NULL,
    ADD COLUMN `img_name` VARCHAR(45) NULL;
