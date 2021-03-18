const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', (req, res) => {
  res.send("Hello World");
})

app.listen(5000, () => {
  console.log('server on 5000');
})
