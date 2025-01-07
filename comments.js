// Create web server
// 1. Import express
// 2. Create express app
// 3. Create a route for comments
// 4. Create a route for comments/:id

const express = require('express');
const app = express();
const comments = require('./data/comments');

// 3. Create a route for comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// 4. Create a route for comments/:id
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find(comment => comment.id === Number(id));
  res.json(comment);
});

// 5. Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});