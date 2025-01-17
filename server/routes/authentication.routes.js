const express=require('express');
const { authenticationController } = require('../controllers');
const validate = require('../middlewares/validate');
const { createUser } = require('../validations/user.validations');

const router=express.Router();

router.route('/register')
.post(validate(createUser),authenticationController.Register)


module.exports=router;