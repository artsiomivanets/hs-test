create database test;
create database dev;
create user clojure with encrypted password 'clojure';
grant all privileges on database test to clojure;
grant all privileges on database dev to clojure;
