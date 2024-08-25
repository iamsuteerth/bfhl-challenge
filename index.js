const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint to process input data
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: "Invalid data format" });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highestLowercaseAlphabet = alphabets.filter(char => char === char.toLowerCase()).sort().pop() || '';

  const response = {
    is_success: true,
    user_id: "suteerth_subramaniam_10092003", // replace ddmmyyyy with your DOB
    email: "suteerth@gmail.com",  // replace with your email
    roll_number: "21BCE0575",         // replace with your roll number
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
  };

  res.json(response);
});

// GET endpoint to return operation code
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
