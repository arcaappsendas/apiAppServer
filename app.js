const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/log', (req, res) => {
  const logMessage = req.body.message;
  console.log(JSON.stringify(req.body));
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});