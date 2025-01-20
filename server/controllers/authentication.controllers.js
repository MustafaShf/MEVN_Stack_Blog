const httpStatus=require('http-status')
const { AuthService } = require("../services");
const catchAsync=require('../utils/catchAsync')

const Register=catchAsync(async (req,res)=>{
    const res_obj=await AuthService.register(req?.body);
    //console.log(res_obj)
    //res.send(res_obj)
    res.status(httpStatus.status.CREATED).send(res_obj)
})

const loginController=catchAsync(async (req,res)=>{
    const res_obj=await AuthService.loginService(req?.body);
    //console.log(res_obj)
    //res.send(res_obj)
    res.status(httpStatus.status.OK).send(res_obj)
})

const profileController=catchAsync(async (req,res)=>{
    const res_obj=await AuthService.userProfile(req?.user);
    //console.log(res_obj)
    //res.send(res_obj)
    res.status(httpStatus.status.OK).send(res_obj)
})

module.exports={
    Register,
    loginController,
    profileController
}