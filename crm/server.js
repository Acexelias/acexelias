const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

let contacts = [];

// Basic API endpoints
app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

app.post('/api/contacts', (req, res) => {
  const contact = req.body;
  contact.id = Date.now();
  contacts.push(contact);
  res.status(201).json(contact);
});

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`CRM server running on port ${PORT}`);
});
