const { userModel } = require("../models");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const createToken = require("../utils/jwt.utils");

const register = async (body) => {
  const { name, email, password } = body;
  const existedUser = await userModel.findOne({ email: email });
  if (existedUser) {
    throw new ApiError(httpStatus.status.BAD_REQUEST, "user already exist");
  }
  const user = await userModel.create({
    name,
    email,
    password,
  });
  return user;
};

const loginService = async (body) => {
    const {email, password } = body;
    //console.log(email,password)
    const existUser=await userModel.findOne({email:email})
    if(!existUser)
    {
        throw new ApiError(httpStatus.status.BAD_REQUEST,'User is not available')
        
    }
    const isMatch=await existUser.comparePassword(password)
    if(!isMatch)
    {
        throw new ApiError(httpStatus.status.BAD_REQUEST,'invalid Cradentials');
        
    }
    const token=createToken(existUser.id)

    //console.log(existUser.id)
    return token


};

  const userProfile = async (id) => {
    return await userModel.findById(id).select('email name' )

  };

module.exports = {
  register,
  loginService,
  userProfile
};
