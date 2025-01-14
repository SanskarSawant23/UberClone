const userModel = require('../Db/models/usermodel');
const userService = require('../Services/user.services.js');
const {validationResult} = require('express-validator') 
const blacklistTokenModel = require('../Db/models/blacklisttoken.js');

//in this file we are making a database call to create the user in the database;

module.exports.registerUser = async(req, res, next)=>{
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    console.log("inside registerUsers")
    const {fullname, email, password} = req.body;

    const hashsedpassword = await userModel.hashPassword(password)
    
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashsedpassword
    })


    const token = user.generateAuthToken();

    res.status(200).json({token, user});

}

module.exports.loginUser = async (req, res, next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.json("Your EmailId or Password is Incorrect");
    }

    const {email, password} = req.body;

    const user = await userModel.findOne({email}).select('password')

    if(!user){
       return  res.status(401).json({message:"Invalid email or password"});
    }

    const isMatch = await user.comparePassword(password)

    if(!isMatch){
      return  res.status(400).json({message:"Invalid Password"});
    }

    const token = user.generateAuthToken();
    res.status(200).json({token, user});
}

module.exports.getUserProfile = async(req, res, next)=>{
    res.status(200).json(req.user);
}

module.exports.logoutUser = async(req, res, next)=>{
    const token = req.header.authorization.split(' ')[1];

    await blacklistTokenModel.create({token});

    res.status(200).json({message:'Logged out'});
}

//we use module.export.functioname = body
//when we want to export multiple functions.
//the purpose that we have used this is because use can export multiple functions with this format.
