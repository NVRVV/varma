const express = require('express');
const cors = require('cors');
const apiRoutes = require('./api');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

module.exports = app;

const cors = require('cors');
app.use(cors());