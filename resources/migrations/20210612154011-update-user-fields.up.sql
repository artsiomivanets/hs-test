ALTER TABLE users
ADD COLUMN first_name VARCHAR,
ADD COLUMN last_name VARCHAR;
--;;
UPDATE users
SET first_name = name;
