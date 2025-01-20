const jwt=require('jsonwebtoken');
const ApiError = require('../utils/ApiError');
const httpStatus=require('http-status');
const constantKeys = require('../constant/keys');
const verifyJWT=(req,res,next)=>
{
    try {
        const token=req?.headers['authorization'];
        
        if(!token.startsWith("Bearer "))
        {
            throw new ApiError(httpStatus.status.UNAUTHORIZED,'Not Authenticated')
        }
        const auth=token.split("Bearer ")[1]
        const verifyUser=jwt.verify(auth,constantKeys.jwtKey)
        req.user=verifyUser.id
        next()
    } catch (error) {
        next(error)
    }
}

module.exports=verifyJWT