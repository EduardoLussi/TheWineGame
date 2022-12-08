const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const server = require('http').Server(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Get routes
app.use(require('./routes'));

server.listen(3333);
