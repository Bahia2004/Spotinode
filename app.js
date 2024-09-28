const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files like uploaded music files
app.use('/uploads', express.static('uploads'));

// Use the router for handling routes
app.use(router);

// Set the view engine to render HTML files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
