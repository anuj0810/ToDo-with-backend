const Todo=require('../models/home');

// to print all the data in home page 
module.exports.home=function(req,res){
    Todo.find({},function(err,todoitems){
        if(err){
            console.log("there is some error to print the data from data base");
            return;
        }
        return res.render('home',{
            title:'todowithbackend',
            todo_list : todoitems
        })
    })
}
//save the data into database
module.exports.todo=function(req,res){
Todo.create(req.body , function(err,todoData){
    if(err){
        console.log('getting error to fetch the data from form');
        return;
    }
    console.log("*******", todoData)
            return res.redirect('back');

})
}

module.exports.deleteTask = function (req, res) {
    for(let i in req.body){
      
       Todo.findByIdAndDelete(req.body[i], function (err) {
        if (err) {
          console.log('Error in Deleting the item'); 
          return;
        }
  
      })
    }
    return res.redirect('back');
  }
