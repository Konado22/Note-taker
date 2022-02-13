const router = require("express").Router();
var uniqid = require("uniqid");
const { readFromFile, readAndAppend} = require("../util/fs");

router.get("/notes", (req, res) => {
  readFromFile("./db/db.json")
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => console.log(err));
});

  router.post("/notes", (req, res) => {
    const title = req.body.title
    const body = req.body.body

    const newNote = {
      title:title,
      text: body,
      id: uniqid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(newNote);
  });
module.exports = router;
