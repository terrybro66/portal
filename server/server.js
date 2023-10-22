const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/json', (req, res) => {
    const jsonData = { message: 'Hello, JSON!' };
    res.json(jsonData);
  });
app.listen(port, () => console.log(`Server running on port ${port}`));
