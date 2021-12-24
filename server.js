const express = require("express");
const app = express();
const Store = require('./db/')
const apiRoutes = require('./routes/apiRoutes')
const htmlRoute = require('./routes/htmlRoutes')
const PORT = process.env.PORT || 3001;
//initilize 
app.use('/', htmlRoute)
app.use('/api',apiRoutes)
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//get request for homepage
app.get('/', (req,res) => {
res.sendFile((path.join(__dirname, '/public/index.html'))
)})
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
})
app.listen(PORT, ()=> {
  console.log( `app listening at http://localhost:${PORT}`);
})
