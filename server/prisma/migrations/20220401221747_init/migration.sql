/*
  Warnings:

  - You are about to drop the `HeaderConfig` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `HeaderConfig`;

-- CreateTable
CREATE TABLE `account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `header_config` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NULL,
    `sub_title` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `social_config` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(45) NULL,
    `class_name` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `path`(`path`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
