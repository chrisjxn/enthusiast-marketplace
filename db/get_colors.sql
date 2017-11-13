SELECT color, id FROM colors
WHERE year_id = $1
ORDER BY id ASC;