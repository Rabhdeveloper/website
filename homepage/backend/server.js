const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

// Register endpoint
app.post('/register', (req, res) => {
  const data = req.body;

  // Read existing data
  fs.readFile('users.json', 'utf8', (err, fileData) => {
    if (err && err.code !== 'ENOENT') {
      return res.status(500).json({ message: 'Error reading file' });
    }

    const users = fileData ? JSON.parse(fileData) : [];
    users.push(data); // Add the new user

    // Save updated data back to the file
    fs.writeFile('users.json', JSON.stringify(users, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ message: 'Error writing to file' });
      }
      res.status(201).json({ message: 'User registered successfully!' });
    });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
