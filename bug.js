const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  // ... other code to fetch user data ...
  res.json({ user: user });
});

//This will cause an error if the /users/:id route is called with an id that is not a number
app.get('/users/:id/profile', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... other code to fetch user profile ...
});