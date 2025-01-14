
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const driverSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            require: true,
        
        },lastname:{
            type:String,
            required:false
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        match:[/^\S+@\S+\.\S+$/, 'Please enter a valid email']

    },
    password:{
        type: String,
        required:true
    },
    socketId:{
        type:String,
    },
    status:{
        type: String,
        enum:["active", "inactive"],
        default: 'inactive',
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3, 'color must be atleast 3 characters long']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'number plate must be atleast 3 characters long']
        }, 
        capacity:{
            type:Number,
            required:true,
            min:[1, 'Capacity must be atleast 1'],
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']
        },
        location:{
            lat:{
                type:Number
            },
            log:{
                type:Number
            }
        }
    }

})

driverSchema.methods.generateAuth = function (){
    const token = jwt.sign({_id:this._id}, 'UBER', {expiresIn:'24h'})
    return token;
}

driverSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

driverSchema.statics.hashedpassword = async function(password){
        return await bcrypt.hash(password, 10);
}

const drivermodel = mongoose.model('driver',driverSchema)

module.exports = drivermodel;

