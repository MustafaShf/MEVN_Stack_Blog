
const { boolean } = require('joi');
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
    },
    isDeleted: {
        type: Boolean,  // Corrected from `boolean` to `Boolean`
        default: false
    }
},{
    timestamps:true
})

const postModel=mongoose.model('post',postSchema)

module.exports=postModel;