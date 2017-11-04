SELECT 
  generations.id, 
  generation, 
  make, 
  product_line line 
FROM generations 
INNER JOIN makes ON makes.id = generations.make_id 
INNER JOIN product_lines ON product_lines.id = generations.product_line_id;