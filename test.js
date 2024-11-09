const express = require('express');
const app = express();
app.use(express.json()); 

app.listen(3000, () => console.log('Server running on port 3000'));

app.get('/api/items', (req, res) => {
  res.send("it works");
});

app.post('/api/items', (req, res) => {
  const newItem = req.body;
  res.send(`Item added: ${newItem}`);
});
