const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Basic route
app.get('/', (req, res) => {
    res.render('index');
});

// Serve the editor.html file correctly
app.get('/editor', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/editor.html'));
});

// Dynamic content example with HTMX
app.get('/dynamic-content', (req, res) => {
    res.send('<p>This content was loaded dynamically via HTMX!</p>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
