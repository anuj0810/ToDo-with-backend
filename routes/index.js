const express = require('express');
const router= express.Router();
const homeController=require('../Controllers/homeController')
router.get('/',homeController.home);
router.post('/todo',homeController.todo);
router.post('/delete_task',homeController.deleteTask);




module.exports=router;