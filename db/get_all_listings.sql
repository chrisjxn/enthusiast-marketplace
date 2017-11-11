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
  price, 
  miles, 
  location, 
  owners, 
  color, 
  engine, 
  interior, 
  option, 
  package, 
  transmission, 
  trim 
FROM listings 
LEFT JOIN makes ON makes.id = listings.make_id 
LEFT JOIN product_lines ON product_lines.id = listings.product_line_id 
LEFT JOIN generations ON generations.id = listings.generation_id 
LEFT JOIN models ON models.id = listings.model_id 
LEFT JOIN years ON years.id = listings.year_id 
LEFT JOIN colors ON colors.id = listings.color_id 
LEFT JOIN engines ON engines.id = listings.engine_id 
LEFT JOIN interiors ON interiors.id = listings.interior_id 
LEFT JOIN options ON options.id = listings.option_id 
LEFT JOIN packages ON packages.id = listings.package_id 
LEFT JOIN transmissions ON transmissions.id = listings.transmission_id 
LEFT JOIN trims ON trims.id = listings.trim_id;
