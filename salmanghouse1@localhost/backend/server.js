// server.js

const express = require('express');
const app = express();
const port = 3001;

// Define API endpoints
app.get('/autocad/commands', (req, res) => {
  // Handle AutoCAD commands here
  res.json({ message: 'Received AutoCAD commands' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
