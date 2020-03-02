const express = require("express");
const app = express();
const fetch = require('node-fetch');
const url = 'https://api.github.com/search/users?q=location:bangalore&page=2&per_page=100';
const cors = require('cors');

app.use(cors());

app.get('/', async(req, res) => {
  fetch('https://api.github.com/search/users?q=location:bangalore&page=2&per_page=100')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return res.status(201).json({
      createdContent: data
    });
  })
})

module.exports = app;
