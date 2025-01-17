const express=require('express');
const { Register } = require('../controllers/authentication.controllers');
const router=express.Router();

router.route('/register')
.post(Register)


module.exports=router;