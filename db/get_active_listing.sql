SELECT 
  listings.id, 
  make, 
  product_line line, 
  generation, 
  model, 
  models.id model_id, 
  year, 
  years.id year_id, 
  photo1, 
  photo2, 
  photo3, 
  photo4, 
  photo5, 
  photo6, 
  photo7, 
  photo8, 
  photo9, 
  photo10, 
  photo11, 
  photo12, 
  photo13, 
  photo14, 
  photo15, 
  photo16, 
  photo17, 
  photo18, 
  photo19, 
  photo20, 
  photo21, 
  photo22, 
  photo23, 
  photo24, 
  photo25, 
  photo26, 
  photo27, 
  photo28, 
  photo29, 
  photo30, 
  photo31 
FROM listings 
LEFT JOIN makes ON makes.id = listings.make_id 
LEFT JOIN product_lines ON product_lines.id = listings.product_line_id 
LEFT JOIN generations ON generations.id = listings.generation_id 
LEFT JOIN models ON models.id = listings.model_id 
LEFT JOIN years ON years.id = listings.year_id 
WHERE listings.id = $1;