const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});