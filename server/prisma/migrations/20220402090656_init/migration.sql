-- CreateTable
CREATE TABLE `upload_images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `file_name` VARCHAR(45) NULL,
    `file_path` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
