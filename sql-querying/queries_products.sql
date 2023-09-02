-- Comments in SQL Start with dash-dash --
/*
CREATE table products
(
    name TEXT NOT NULL PRIMARY KEY, 
    price float, 
    can_be_returned BOOLEAN
);

*/



/* 1) Add a product to the table with the name of “chair”, price of 44.00, and can_be_returned of false. */
insert into products(name, price, can_be_returned)
values('chair', 44.00, 'f');

/* 2) Add a product to the table with the name of “stool”, price of 25.99, and can_be_returned of true. */

insert into products(name, price, can_be_returned)
values('stool', 25.99, 't');

/* 3) Add a product to the table with the name of “table”, price of 124.00, and can_be_returned of false. */
insert into products(name, price, can_be_returned)
values('table', 124.00, 'false');

/* 4) Display all of the rows and columns in the table. */
SELECT * FROM products;

/* 5) Display all of the names of the products.*/

SELECT name from products ;

/* 6) Display all of the names and prices of the products.*/
SELECT name, price from products;

/* 7) Add a new product - make up whatever you would like! */

INSERT INTO products
  (name, price, can_be_returned)
VALUES
  ('rocks', 99.00, 't');

/* 8) Display only the products that can_be_returned */

SELECT * FROM products WHERE can_be_returned = 't';

/* 9) Display only the products that have a price less than 44.00. */

SELECT * FROM products WHERE price<44;

/* 10) Display only the products that have a price in between 22.50 and 99.99. */

SELECT * FROM products WHERE price>=22.50 and price<=99.99;
SELECT * FROM products WHERE price BETWEEN 22.5 AND 99.99;

/* 11) There’s a sale going on: Everything is $20 off! Update the database accordingly. */

UPDATE products SET price = price - 20;

/* 12) Because of the sale, everything that costs less than $25 has sold out. Remove all products whose price meets this criteria. */

DELETE from products WHERE price<25;
/* 13) And now the sale is over. For the remaining products, increase their price by $20. */

UPDATE products SET price = price + 20;

/* 14) There is a new company policy: everything is returnable. Update the database accordingly. */

UPDATE products SET can_be_returned = 't';










