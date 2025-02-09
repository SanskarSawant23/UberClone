const express = require("express")
const app = express();
const cors = require('cors');
const db = require('./Db/db')
const userRoutes = require('./routes/userroute')
const driverroutes = require('./routes/driverroutes');

db();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use(express.json());

app.get('/', (req, res)=>{ 
    res.send("hello world")
    
})
app.use('/users', userRoutes)
app.use('/driver', driverroutes)




app.listen(4000);

module.exports = app;