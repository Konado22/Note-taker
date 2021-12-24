const fs = require("fs");
const uuidv1= require('uuid/v1');
class Store {
  async read() {
    const data = fs.readFile("./db/db.json", "utf8");
    return data;
  }
   async write() {
    function getNotes(){
    const res = await this.read();
    return JSON.parse(res);
   }};

  addNotes() {
      const add=  this.read();
      const data = this.json(req);
      const obj = {
        note: data[1],
        info: data[2],
        key3: uuidv1,
      }
        fs.appendFile('../db/db.json', add)
    }
};
module.exports = Store;
