const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bookRoutes = require("./api/bookRoutes");
const authRoutes = require("./api/authRoutes");


// middlewares
app.use(express.json({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

// config
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// routes
app.use('/api/books', bookRoutes);
app.use('/admin', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
