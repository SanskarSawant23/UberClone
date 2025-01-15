const { validationResult } = require('express-validator')
const drivermodel = require('../Db/models/Driver')
const driverservice = require('../Services/driver.services');
const blacklisttoken =require('../Db/models/blacklisttoken')


module.exports.registerDriver = async(req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty){
            return res.status(400).json({errors:errors.array()});
        }
        
        const{fullname, email, password, vehicle} = req.body;

        const isDriverAlreadyExists = await drivermodel.findOne({email});
        if(isDriverAlreadyExists){
            return res.json({msg:"User already registered. Use different emailId"});
        }
        const hashedpassword = await drivermodel.hashedpassword(password);
        const driver = await driverservice.createDriver({
            firstname: fullname.firstname,
            lastname:fullname.lastname,
            email,
            password: hashedpassword,
            color:vehicle.color,
            plate:vehicle.plate,
            capacity:vehicle.capacity,
            vehicleType:vehicle.vehicleType
        })

        const token = driver.generateAuth();

        res.status(201).json({token, driver});
}


module.exports.loginDriver = async(req, res, next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array()})
    }
    //check the email and password from the database.
    const {email, password} = req.body;
    const driver =  await drivermodel.findOne({email}).select('password');
    if(!driver){
        return res.status(401).json({msg:"Invalid email or password"});
    }
    //compare the password
    console.log(driver)
    const isMatch = await driver.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({msg:"Password is incorrect"});
    }

    const token = driver.generateAuth();
    res.status(200).json({
        token,
        driver
    })


}

module.exports.getdriverprofile = async(req, res, next)=>{
        res.status(200).json({driver: req.driver});
}

module.exports.logoutdriver = async(req,res,next)=>{

    const token = req.authorization?.split(' ')[1];
    const BT= await blacklisttoken.create({token});
   
    console.log(BT);
    res.status(200).json({msg:"Logout successfully"});
}