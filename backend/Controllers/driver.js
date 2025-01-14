const { validationResult } = require('express-validator')
const drivermodel = require('../Db/models/Driver')
const driverservice = require('../Services/driver.services')


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