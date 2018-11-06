const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const server = express();
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));
server.use(helmet());

server.get('/', (req, res) => {
  res.status(200).json({ good: 'Working' });
});

const PORT = process.env.PORT || 9000;
server.listen(PORT, err => {
  if (err) return console.log('error');
  console.log(`Server running on port 9000`);
});
