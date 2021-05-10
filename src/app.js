const express = require('express');
const app = express();
const port= process.env.PORT ||8200;
const path = require('path');
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public')));



app.set('views', path.join(__dirname,'../templates/views'));

const partialsPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath);

app.get('/',(req,res) => {
  res.render('index');
});
app.get('/about',(req,res) => {
  res.render('about');
});

app.get('/weather',(req,res) => {
  res.render("weather");
});


app.get('*',(req,res) => {
  res.render("404");
})
app.listen(port,()=>{
  console.log(`listening at ${port}`);
});