const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public'))
})

app.use(morgan('dev'));
app.use(express.static('public'));

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`Successfully Connected On http://localhost:${port}`);
})