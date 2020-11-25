const path=require('path');
const express=require('express');
const compression= require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const contact = require('./routes/contact')




const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!')
})


// BODY PARSER WITH LIMITTED BODY 
app.use(express.json({ limit: '10kb' }));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true,limit:'10kb'}))
app.use(cookieParser());


app.use('/api/v1/contact',contact);


module.exports=app;