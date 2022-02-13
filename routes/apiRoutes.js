const router = require('express').Router(); //using express
const fs = require('fs');
const path = require('path'); //__dirname? -- might not need
var uniqid = require('uniqid'); //creates unique ID - change to const?
const db = require('../db/db.json');

router.get('/notes', () => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})
router.post('/notes', (title, text) => {
    const newNote = {
        title:this.title,
        text:this.text,
        id:uniqid()
    }
    readAndAppend(newNote, './db/db.json');
    res.json("Updated");
})
module.exports = router;