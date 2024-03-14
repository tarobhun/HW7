const express = require('express');
const app = express();
const port = 3000;

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Define your API routes
app.get('/getRecipes', (req, res) => {
    // Handle getRecipes API logic here
    res.json({ message: 'API endpoint for getRecipes' });
});

app.post('/addRecipe', (req, res) => {
    // Handle addRecipe API logic here
    res.json({ message: 'API endpoint for addRecipe' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
