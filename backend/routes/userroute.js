const express = require('express')
const router = express.Router()
const {body} = require("express-validator");
const userController = require('../Controllers/users');  // returns the module.exports object which has properties of the functions defined.
const authMiddleware = require('../Middleware/middleware')

console.log(userController)


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage("First name must be at lease 3 characters long"),
    body('password').isLength({min:6}).withMessage('Passwrod must be 6 characters long')

], 
     userController.registerUser

)


router.post('/login',[body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password Invalid')


],
userController.loginUser


),

router.get('/logout', authMiddleware.authuser, userController.logoutUser);

router.get('/profile',authMiddleware.authuser, userController.getUserProfile)


module.exports = router;