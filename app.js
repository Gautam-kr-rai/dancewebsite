const express = require("Express");
// const path = require("path");
const path = require("path");
const app = express();
const port = 800;

 // Express specific stuff
 app.use('/static',express.static('static'));
 app.use(express.urlencoded())

 // puf specific stuff
 app.set('view engine','pug');
 app.set('views', path.join(__dirname, 'views'));
 
 // End point
 app.get('/',(req,res)=>{
   const prams={}
   res.status(200).render('home.pug',prams)
 })
 
 app.get('/contact',(req,res)=>{
   const prams={}
   res.status(200).render('contact.pug',prams)
 })
 
 // server start 
 app.listen(port,()=>{
    console.log(`the application started sucessfully on port ${port}`);
 })