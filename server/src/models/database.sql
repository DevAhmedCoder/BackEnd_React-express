CREATE DATABASE testdb;

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    product_ref VARCHAR(255) UNIQUE,
    product_name VARCHAR(255),
    product_category VARCHAR(255)
);