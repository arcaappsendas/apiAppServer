const express = require('express');
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors({ origin: "*" }));

app.use(express.json());
var array = [];

app.post('/log', (req, res) => {
  const logMessage = req.body.message;
  array.push(req.body);
  console.log(JSON.stringify(array));
  res.send(JSON.stringify(array));
  //res.status(204).end();
 
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});