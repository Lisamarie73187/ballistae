DROP TABLE ballistaeproduct;

CREATE TABLE ballistaeproduct(
    productid SERIAL PRIMARY KEY,
    title TEXT,
    price DECIMAL,
    description TEXT,
    img TEXT
);

SELECT * FROM ballistaeproduct;