const express = require('express');
const router = express.Router();
const drivercontroller = require("../Controllers/driver")
const{body}= require('express-validator');
const middleware = require('../Middleware/middleware');



router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage("First name must be at lease 3 characters long"),
    body('password').isLength({min:6}).withMessage('Passwrod must be 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invalid vehicle type')
],
        drivercontroller.registerDriver
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be 6 characters long')
],
    drivercontroller.loginDriver
)
router.get('/profile',middleware.authDriver, drivercontroller.getdriverprofile)

router.post('/logout',middleware.authDriver, drivercontroller.logoutdriver);




module.exports =router;