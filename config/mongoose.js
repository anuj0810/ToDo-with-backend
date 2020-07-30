const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/todoDb');
const db=mongoose.connection;

db.on('error',console.error.bind('err',"getting error to connecting with mongo"));
db.once('open',function(){
    console.log('yeah connected sucessfull with mongodb')
});

module.exports=db;