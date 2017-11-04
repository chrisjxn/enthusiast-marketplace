SELECT 
  product_lines.id, 
  product_line line, 
  make
FROM product_lines
INNER JOIN makes ON makes.id = product_lines.make_id;