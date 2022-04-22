const express = require("express");
const path = require("path");
// Initialize our Application
const app = express();
const PORT = process.env.PORT || 3001;

// App setup - middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, './public/index.html'))
});

app.get('/notes', (request, response) => {
    response.sendFile(path.join(__dirname, './public/notes.html'))
});

// Form data to be sent to route
// app.post('/')

// Start the Server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT})`);
});