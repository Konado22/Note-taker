const express = require("express");
const router = express.Router();
const Store = require("../db/store.js");

router.get("/notes", (req, res) => {
  Store.read().then((notes) => {
    return res.json(notes);
  });
});
router.post("../db/db.json", (req, res) => {
  Store.addNotes().then((notes) => {
    fs.writeFileSync("../db/db.json", JSON.stringify(notes));
    return res.json(notes)
  });
});

module.exports = router;
