const userModel = require('../Db/models/usermodel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const blacklisttoken = require("../Db/models/blacklisttoken")
const drivermodel = require('../Db/models/Driver');





module.exports.authuser = async (req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({msg: "unauthorized"});
    }
   

    const isBlacklisted = await blacklisttoken.findOne({token:token})  //if this token is present in the user schema database.
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

module.exports.authDriver = async (req, res, next) =>{
    console.log("inside driver middleware");
    const token = req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({msg:"unauthoriazed"});
    }
    
    const isBlacklisted = await blacklisttoken.findOne({token:token});
    console.log("isblacklisted", isBlacklisted)
    if(isBlacklisted){
        return res.status(401).json({msg:"unauthorized"});
    }
    try{
        const decoded = jwt.verify(token, "UBER")
        const driver = await drivermodel.findById(decoded._id);
        req.driver = driver; //setting the id of the driver in the authentication.
        next();

    }catch(error){
            res.status(401).json({msg:'unauthoriazed'});
    }
}