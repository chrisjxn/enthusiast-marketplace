SELECT 
  listings.id, 
  year, 
  make, 
  product_line line, 
  generation, 
  model, 
  models.id model_id, 
  photo1 
FROM listings 
LEFT JOIN makes ON makes.id = listings.make_id 
LEFT JOIN product_lines ON product_lines.id = listings.product_line_id 
LEFT JOIN generations ON generations.id = listings.generation_id 
LEFT JOIN models ON models.id = listings.model_id;
