SELECT 
  listings.id, 
  year, 
  make, 
  product_line line, 
  generation, 
  model, 
  models.id model_id, 
  cover_photo_url coverphotourl 
FROM listings 
LEFT JOIN makes ON makes.id = listings.make_id 
LEFT JOIN product_lines ON product_lines.id = listings.product_line_id 
LEFT JOIN generations ON generations.id = listings.generation_id 
LEFT JOIN models ON models.id = listings.model_id 
WHERE listings.id = $1;