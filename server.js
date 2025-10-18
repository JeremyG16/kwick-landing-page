const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Set proper MIME types
app.use(express.static('.', {
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Content-Type', 'text/html');
    }
  }
}));

// Explicitly serve index.html with correct content type
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Catch all other routes
app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});