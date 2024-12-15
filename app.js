const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
let dotenv = require("dotenv").config();

const app = express();

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const eventRoutes = require('./routes/eventRoutes');
const commentRoutes = require('./routes/commentRoutes');
const workshopRoutes = require('./routes/workshopRoutes');
const adminRoutes = require('./routes/adminRoutes'); // Import admin routes
const { createDefaultAdmin } = require('./models/admin'); // Import createDefaultAdmin function

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Route handlers
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/reg', workshopRoutes);
// app.use('/api/search', searchRoutes);
app.use('/api/workshop', workshopRoutes);
app.use('/api/admin', adminRoutes);

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  dbName: "myapp"
})
  .then(async () => {
    console.log('MongoDB Connected');
    // await createDefaultAdmin(); // Create default admin user
  })
  .catch(err => console.log(err));

// Export the Express app
module.exports = app;