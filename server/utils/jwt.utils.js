const jwt=require('jsonwebtoken')
const constantKeys = require("../constant/keys");

const createToken = (userId) => {
    const payload = {
      id: userId, // Payload could contain user data
    };
  
    const secretKey = constantKeys.jwtKey || "development"; // Secret key for signing the token
    const options = {
      expiresIn: "1h", // Token expiration time (optional)
    };
  
    // Create the JWT token
    const token = jwt.sign(payload, secretKey, options);
    return token;
  };

module.exports=createToken
