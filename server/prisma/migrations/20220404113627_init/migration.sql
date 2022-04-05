/*
  Warnings:

  - You are about to drop the column `sub_title` on the `user_config` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `user_config` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user_config` DROP COLUMN `sub_title`,
    DROP COLUMN `title`,
    ADD COLUMN `desc` VARCHAR(45) NULL,
    ADD COLUMN `name` VARCHAR(45) NULL;
