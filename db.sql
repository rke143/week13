CREATE TABLE users(
    id serial PRIMARY KEY,
    username TEXT,
    password TEXT
);

INSERT INTO users (username) VALUES ('harry');