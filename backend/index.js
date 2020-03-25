const express = require('express');

const app = express();

app.get('/hello', (req, res) => res.json({
  event: 'Semana omnistack 11',
  student: 'Ivan Vinicius Boneti'
}));

app.listen(3333);