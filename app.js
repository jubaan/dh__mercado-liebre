const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // default
const publicPath = path.join(__dirname, './public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/home.html'));
});

app.listen(port, () =>
  console.log(
    `Server running in port ${port}, please visit https:localhost:${port}`
  )
);
