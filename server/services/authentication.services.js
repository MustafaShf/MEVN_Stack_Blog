const { userModel } = require("../models")

const register=async (body)=>{
    const {name,email,password}=body
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