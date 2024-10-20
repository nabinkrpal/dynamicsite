const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT||8000; // Use dynamic port for deployment

// For serving static files
app.use(express.static('static'));

// To parse URL-encoded data from form submissions
app.use(express.urlencoded({ extended: true }));

// Set the template engine as Pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Endpoints
app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('home.pug', params);
});

app.get('/contact', (req, res) => {
    const params = {};
    res.status(200).render('contact.pug', params);
});

// Start server
app.listen(port, () => {
    console.log(`The application started successfully on port http://127.0.0.1:${port}`);
});
