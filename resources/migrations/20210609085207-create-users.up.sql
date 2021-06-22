CREATE TYPE sex as ENUM ('male', 'female');
--;;
CREATE TABLE IF NOT EXISTS users (
  id serial,
  name varchar(255),
  sex sex,
  birthday date,
  address jsonb,
  health_insurance_number char(16)
);
