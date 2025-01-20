const { userModel, BlogPostModel } = require("../models");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const createToken = require("../utils/jwt.utils");
const mongoose=require('mongoose')

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
  return {
    "Msg":'User Successfully Registered'
  };
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
    return {msg:'User Successfully Login',
      'token':token
    }


};

  const userProfile = async (id) => {
    return await userModel.findById(id).select('email name' )

  };
  const createPost=async (user,body,file) => {
    ////console.log(user,body,file)
    //console.log(body.title)
    const title=body.title
    const content=body.content
    //console.log(title)
    const newTitle=title.split(' ').join('-')
    const existance=await BlogPostModel.findOne({title})
    //console.log(existance)
    if(existance)
    {
      throw new ApiError(httpStatus.status.BAD_REQUEST,'Title already exist')
    }
    const model=await BlogPostModel.create({
      title:title,
      slug:newTitle,
      content,
      image:file?.filename,
      user:user
    })
    console.log(model
    )
    return model

  };
  const AllPost= async ()=>{
    const posts=await BlogPostModel.find({}).populate('user','email name')
    return {posts,total:posts.length}
  }

  const PostByID= async (id)=>{
    console.log(id)
    const post = await BlogPostModel.find({ _id: id }).populate('user', 'email name');
    if(post.isDeleted) return null

    //console.log(post)
    return {post}
  }

  const DeleteByID= async (id)=>{
    console.log(id)
    const post=await BlogPostModel.findByIdAndUpdate(id,{
      isDeleted:true
    })
    //console.log(post)
    return {msg:'post deleted'}
  }


module.exports = {
  register,
  loginService,
  userProfile,
  createPost,
  AllPost,
  PostByID,
  DeleteByID

};
