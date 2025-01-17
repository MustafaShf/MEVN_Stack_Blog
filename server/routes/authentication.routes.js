const express=require('express');
const { authenticationController } = require('../controllers');

const router=express.Router();

router.route('/register')
.post(authenticationController.Register)


module.exports=router;