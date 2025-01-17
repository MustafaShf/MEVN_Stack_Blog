const { userModel } = require("../models")
const ApiError = require("../utils/ApiError")
const httpStatus=require('http-status')

const register=async (body)=>{
    const {name,email,password}=body
    const existedUser=await userModel.findOne({email:email})
    if(existedUser){
        throw new ApiError(httpStatus.status.BAD_REQUEST,'user already exist')
        
    }

   const user=await userModel.create(
        {
            name,
            email,
            password
        }
    )
    return user

}

module.exports={
register,
}