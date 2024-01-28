const express = require('express');
const app = express();
const apiRouter = require('./routes/apiRouter');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hola, esta es tu API.');
});

// API route
app.use('/api', apiRouter);

// Start
app.listen(port, () => {
    console.log(`Hello Solana! 🟣 Server is running at http://localhost:${port}`);
  });