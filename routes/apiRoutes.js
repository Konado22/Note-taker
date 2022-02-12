const router = require('express').Router(); //using express
const fs = require('fs');
const path = require('path'); //__dirname? -- might not need
var uniqid = require('uniqid'); //creates unique ID - change to const?
const db = require('../db/db.json');

router.get('/notes', () => {

})
router.post('/notes', () => {

})
module.exports = router;