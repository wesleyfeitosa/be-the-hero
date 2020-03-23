const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({
    evento: 'Semana Omnistack 11',
    aluno: 'Wesley Feitosa',
  });
});

app.listen(3333, () => {
  console.log('Server on...')
})