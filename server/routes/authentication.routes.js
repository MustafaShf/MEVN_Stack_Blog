const express=require('express');
const { authenticationController } = require('../controllers');
const validate = require('../middlewares/validate');
const { createUser, loginUser } = require('../validations/user.validations');

const router=express.Router();

router.route('/register').post(validate(createUser),authenticationController.Register)
router.route('/login').post(validate(loginUser),authenticationController.loginController)
router.route('/profile').get(authenticationController.profileController)


module.exports=router;