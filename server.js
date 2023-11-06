const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 80;

app.use(bodyParser.json());

// Endpoint pentru adunare
app.post('/add', (req, res) => {
  const { num1, num2, num3 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    res.status(400).json({ error: 'Date invalide' });
  } else {
    const result = num1 + num2 + num3;
    res.status(200).json({ result });
  }
});

// Endpoint pentru scădere
app.post('/subtract', (req, res) => {
  const { num1, num2, num3 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
    res.status(400).json({ error: 'Date invalide' });
  } else {
    const result = num1 - num2 - num3;
    res.status(200).json({ result });
  }
});

app.use(express.static('public'));

// Endpoint pentru înmulțire
app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    res.status(400).json({ error: 'Date invalide' });
  } else {
    const result = num1 * num2;
    res.status(200).json({ result });
  }
});

// Endpoint pentru împărțire
app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || num2 === 0) {
    res.status(400).json({ error: 'Date invalide' });
  } else {
    const result = num1 / num2;
    res.status(200).json({ result });
  }
});

app.listen(port, () => {
  console.log(`Serverul rulează pe portul ${port}`);
});