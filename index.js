const express = require("express");
const app = express();
const fetch = require('node-fetch');
const url = 'https://api.github.com/search/users?q=location:bangalore&page=2&per_page=100';
const cors = require('cors');

app.use(cors());

app.get('/', async(req, res) => {
  const { page } = req.query;
  const response = await fetch(`https://api.github.com/search/users?q=location:bangalore&page=${page}&per_page=10`)
  .then(response => response.json())
  .then(data => {
    return res.status(201).json(data);
  })
})

app.get("/users", async(req,res) => {
  const { user } = req.query;
  const response = await fetch(`https://api.github.com/search/users?q=user:${user}`)
  .then(response => response.json())
  .then(data => {
    return res.status(201).json(data);
  })
})

module.exports = app;
