CREATE DATABASE IF NOT EXISTS db_porto
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE db_porto;

CREATE TABLE IF NOT EXISTS ratings (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    origin VARCHAR(100) NULL,
    message VARCHAR(500) NOT NULL,
    rating TINYINT UNSIGNED NOT NULL,
    ip_hash CHAR(64) NULL,
    is_visible TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_ratings_visible_created (is_visible, created_at),
    CONSTRAINT chk_ratings_value CHECK (rating BETWEEN 1 AND 5)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS admin_users (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    username VARCHAR(60) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uq_admin_users_username (username)
) ENGINE=InnoDB;

INSERT IGNORE INTO admin_users (username, password_hash)
VALUES ('admin', '$2y$10$t7sFcQmYw52APGSRvBgTL.QzAGS8kNCyUMMN.e4iQBJWrH4yTu1T.');

CREATE TABLE IF NOT EXISTS portfolio_content (
    id TINYINT UNSIGNED NOT NULL DEFAULT 1,
    content_json LONGTEXT NOT NULL,
    updated_by BIGINT UNSIGNED NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT fk_portfolio_content_admin
        FOREIGN KEY (updated_by) REFERENCES admin_users(id)
        ON DELETE SET NULL
) ENGINE=InnoDB;
