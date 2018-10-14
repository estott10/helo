SELECT users.username, users.profile_pic, posts.id, posts.img, posts.title, posts.content
FROM posts
INNER JOIN users ON posts.author_id = users.id WHERE posts.title LIKE $1 AND posts.author_id <> $2