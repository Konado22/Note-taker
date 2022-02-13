const router = require("express").Router();
var uniqid = require("uniqid");
const { readFromFile, writeToFile } = require("../util/fs");

router.get("/notes", (req, res) => {
  readFromFile("./db/db.json")
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => console.log(err));
});
router.post("/notes", (title, text) => {
  router.post("/notes", (req, res) => {
    const { title, text } = req.body;

    const newNote = {
      title,
      text,
      id: uniqid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(newNote);
  });
});
module.exports = router;
