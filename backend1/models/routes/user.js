const { urlencoded } = require("express");
const express=require('express');
const router=express.Router();
const verifyToken = require('../middleware/userAuth');  //JWT TOKEN
const cookieParser = require("cookie-parser");
router.use(cookieParser());
//get body
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
//get body 

// controller
const SignUp=require('../../controller/user/signUp');
const Login=require('../../controller/user/login');
const UserData=require('../../controller/user/userData');
const Logout=require('../../controller/user/logout');
// controller end

//router
router.post("/sign-in", SignUp);
router.post("/login",Login);
router.post("/userData", verifyToken,UserData);
router.get('/logout',Logout)
//router end

module.exports=router;