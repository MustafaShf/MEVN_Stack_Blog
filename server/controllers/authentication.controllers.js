const { AuthService } = require("../services");

const Register=async (req,res)=>{
    const res_obj=await AuthService.register(req?.body);
    //console.log(res_obj)
    res.send(res_obj)
}

module.exports={
    Register,
}