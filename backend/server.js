const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware


const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://wallcroft13579:maya12345@cluster0.1ftiubl.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use(cors());


// Define a mongoose schema for the form data
const formDataSchema = new mongoose.Schema({
  email: String,
});

const FormDataModel = mongoose.model('FormData', formDataSchema);

// Middleware to parse JSON
app.use(bodyParser.json());

// POST endpoint to handle form data
app.post('/api/save-email', async (req, res) => {
  try {
    const { email } = req.body;

    // Create a new FormData document
    const formData = new FormDataModel({ email });

    // Save the form data to the database
    await formData.save();

    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
