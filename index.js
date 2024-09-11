const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Let's use a more appropriate data structure for storing data
let currentData = ""; // Empty string initially

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get('/', (req, res) => {
    // Send a copy of the data to avoid unintended modifications
    res.send(JSON.parse(JSON.stringify(currentData))); // Deep copy to prevent reference issues
});

app.post('/send_data', (req, res) => {
    // Validate and sanitize the received data (optional but recommended)
    // You can use libraries like JOI for data validation
    const newData = req.body; // Assuming validation is done elsewhere

    // Update current data
    currentData = newData;

    // Send a success message or relevant data back to the client
    res.json({ message: 'Data received successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});