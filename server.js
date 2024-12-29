require('dotenv').config();

const app = require('./app');
const PORT = process.env.PORT || 5000;


// Function to start the server
const startServer = () => {
    if (app) {
        console.log('Server is already running.');
        return; // Exit if the server is already running
    }

    server = app.listen(PORT, (err) => {
        if (err) {
            console.error('Error starting server:', err);
            return;
        }
        console.log(`Server is running on port ${PORT}`);
    });
};

// Start the server
startServer();