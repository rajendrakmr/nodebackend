const express = require('express'); // Import Express
const app = express(); // Initialize Express

app.use(express.json()); // Middleware to parse JSON

const PORT = 3000;

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

