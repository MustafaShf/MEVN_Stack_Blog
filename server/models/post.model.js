
const mongoose = require('mongoose')

let postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter Title"]
    },
    slug:{
        type:String,
        unique:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    image:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const postModel=mongoose.model('post',postSchema)

module.exports=postModel;