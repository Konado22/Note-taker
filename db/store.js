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
      const add= await this.read();
        fs.appendFile('../db/db.json', (req,res) =>{
        const data = this.req;
        const addData = data.key3 = uuidv1;
        return  JSON.push(data);
  })}
  
  deleteNotes() {
    const removeItem = await this.read();
    

  };
};
