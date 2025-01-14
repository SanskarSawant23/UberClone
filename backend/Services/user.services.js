

const usermodel = require('../Db/models/usermodel')

module.exports.createUser = async ({
    firstname, lastname, email, password
}) =>{
    if(!firstname || !email || !password){
        throw new Error("all fields are requied");
    }
    const user = usermodel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password,
    })

    return user;
}