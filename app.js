'use strict';

const express = require('express');
const app = express();

const multer = require('multer');

app.use(multer().none());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const SERVER_SIDE_ERROR_MSG = 'Oh no! An error occurred on the server. Try again later.';
const SERVER_SIDE_ERROR_STATUS_CODE = 500;
const CLIENT_SIDE_ERROR_STATUS_CODE = 400;

app.use(express.static('public'));
const PORT = process.env.PORT || 8001;

// Makes it so that each nav bar selection works
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT);