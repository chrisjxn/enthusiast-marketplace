SELECT 
  years.id, 
  year, 
  make, 
  product_line line, 
  generation, 
  model, 
  years.model_id 
FROM years 
INNER JOIN makes ON makes.id = years.make_id 
INNER JOIN product_lines ON product_lines.id = years.product_line_id 
INNER JOIN generations ON generations.id = years.generation_id 
INNER JOIN models ON models.id = years.model_id;