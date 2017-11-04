SELECT 
  models.id, 
  model, 
  make, 
  product_line line, 
  generation 
FROM models 
INNER JOIN makes ON makes.id = models.make_id 
INNER JOIN product_lines ON product_lines.id = models.product_line_id 
INNER JOIN generations ON generations.id = models.generation_id;