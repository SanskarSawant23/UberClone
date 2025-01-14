const mongoose = require('mongoose');

const dburl = "mongodb+srv://sanskarsawant23:2I8NmpyCyrZlTdoO@uberclone.82kll.mongodb.net/?retryWrites=true&w=majority&appName=UberClone"
const connectDb = ()=>{
    mongoose.connect(dburl).then(()=>{
        console.log("connected to Db");
    }).catch(err=> console.log(err));
}

module.exports = connectDb;