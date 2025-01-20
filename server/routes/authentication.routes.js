const express=require('express');
const { authenticationController } = require('../controllers');
const validate = require('../middlewares/validate');
const { createUser, loginUser } = require('../validations/user.validations');
const verifyJWT = require('../middlewares/verifyToken');
const upload=require('../utils/upload')

const router=express.Router();

router.route('/register').post(validate(createUser),authenticationController.Register)
router.route('/login').post(validate(loginUser),authenticationController.loginController)
router.route('/profile').get(verifyJWT,authenticationController.profileController)
router.route('/post').post(verifyJWT,upload.single('image'),authenticationController.postContoller)
.get(authenticationController.AllpostContoller)
router.route('/post/:id').get(authenticationController.postByID)


module.exports=router;