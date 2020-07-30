const express = require('express');
const { urlencoded } = require('express');
const port=8000;
const app=express();
app.set('view engine','ejs');
app.set('views','./views');

const db = require('./config/mongoose');
const todo=require('./models/home');

app.use(express.static('./assets'));
app.use(urlencoded());

app.use('/', require('./routes'))


app.listen(port,function(err){
    if(err)
    {
        console.log('geeting error to connecting with port');
         return;
     }
console.log(`we are ready to go ${port}`);
})