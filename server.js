const express = require("express");
const app = express();
// const apiRoutes = require('./routes/apiRoutes')
const htmlRoute = require('./routes/htmlRoutes')
const PORT = 3001;
//initilize 
app.use('/', htmlRoute)
// app.use('/api',apiRoutes)
app.use(express.static('public'));
app.use(express.json());
// app.use(express.urlencoded({extended:true}));
//get request for homepage
app.listen(PORT, ()=> {
  console.log( `app listening at http://localhost:${PORT}`);
})
