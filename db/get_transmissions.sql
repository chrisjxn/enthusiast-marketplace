SELECT transmission FROM transmissions
WHERE year_id = $1
ORDER BY id ASC;