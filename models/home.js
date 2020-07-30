const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
      description:{
          type: String,
          require:true
         },
      category:{
          type:String,
          required:true
      },
      dueDate:{
          type:Date,
          required:true
      }
},{
timestamps:true
});
const todo = mongoose.model('todo',todoSchema);
module.exports=todo;
