CREATE TABLE makes (
    id SERIAL PRIMARY KEY,
    make VARCHAR(20),
    region VARCHAR(20),
    country VARCHAR(20)
);

CREATE TABLE product_lines (
    id SERIAL PRIMARY KEY,
    product_line VARCHAR(20),
    make_id INT REFERENCES makes(id)
);

CREATE TABLE generations (
    id SERIAL PRIMARY KEY,
    generation VARCHAR(20),
    make_id INT REFERENCES makes(id),
    product_line_id INT REFERENCES product_lines(id)
);

CREATE TABLE models (
    id SERIAL PRIMARY KEY,
    model VARCHAR(40),
    make_id INT REFERENCES makes(id),
    product_line_id INT REFERENCES product_lines(id),
    generation_id INT REFERENCES generations(id)
);

