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

const postContoller=catchAsync(async (req,res)=>{
    console.log(req.user)
    const res_obj=await AuthService.createPost(req?.user,req?.body,req?.file);
    console.log(req)
    //res.send(res_obj)
    res.status(httpStatus.status.OK).send(res_obj)
})

const AllpostContoller=catchAsync(async (req,res)=>{
    console.log(req.user)
    const res_obj=await AuthService.AllPost();
    console.log(req)
    //res.send(res_obj)
    res.status(httpStatus.status.OK).send(res_obj)
})

const postByID=catchAsync(async (req,res)=>{
    console.log(req.params.id)
    const res_obj=await AuthService.PostByID(req?.params.id);
   // console.log(req)
    //res.send(res_obj)
    res.status(httpStatus.status.OK).send(res_obj)
})

module.exports={
    Register,
    loginController,
    profileController,
    postContoller,
    AllpostContoller,
    postByID
}