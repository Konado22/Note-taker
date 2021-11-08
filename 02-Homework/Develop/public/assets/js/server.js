const express = require("express");
const fs = require("fs");
const app = expresss();
const PORT = 3001;

app.use(express.static('public'));
app.get("/", (_, res) => {
  res.sendFile("/index.html");
});
app.get("/notes", (_, res) => {
  res.sendFile("/notes.html");
});
app.post('/api/notes',( req,res) =>{
const response = JSON(res);
response.sendFile("/db/db.json")
});
