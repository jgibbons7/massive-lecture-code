insert into movies (
  movie_name
) values (
  $1
)
returning *;