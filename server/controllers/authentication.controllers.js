const httpStatus=require('http-status')
const { AuthService } = require("../services");
const catchAsync=require('../utils/catchAsync')

const Register=catchAsync(async (req,res)=>{
    const res_obj=await AuthService.register(req?.body);
    //console.log(res_obj)
    //res.send(res_obj)
    res.status(httpStatus.status.CREATED).send(res_obj)
})

module.exports={
    Register,
}