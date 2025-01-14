const userModel = require('../Db/models/usermodel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');





module.exports.authuser = async (req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({msg: "unauthorized"});
    }
   

    const isBlacklisted = await userModel.findOne({token:token})  //if this token is present in the user schema database.
    if(isBlacklisted){
        return res.status(401).json({message:'You have been logged out. Sign in again'})
    }
    try{
        const decoded = jwt.verify(token, "UBER")
        console.log(decoded)
        const user = await userModel.findById(decoded._id);
        console.log(user)
        req.user = user;
        return next();
    }catch(error){
        return res.status(401).json({message:"Unauthorized access"});
    }

}