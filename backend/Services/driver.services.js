const drivermodel = require("../Db/models/Driver");


module.exports.createDriver = async ({
    firstname, lastname, email, password,
    color,plate, capacity, vehicleType
})=>{
    if(!firstname || !email || !email||!password||!color||!plate||!capacity||!vehicleType){
        throw new Error("All fields are required");
    }

    const driver = drivermodel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return driver;
}