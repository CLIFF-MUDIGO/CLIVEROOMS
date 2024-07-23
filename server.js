const express = require('express');

const app = express();

const dbConfig = require('./db');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Node server started ${port}`));