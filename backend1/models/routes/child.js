const express=require('express');
const app=express();
const router=express.Router();
const verifyToken = require('../middleware/userAuth'); //JWT TOKEN

//get body 
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
//get body 

// controller
const Registration=require('../../controller/child/registration');
const Details=require('../../controller/child/childDetails');
const Edit=require('../../controller/child/edit');
const Delete=require('../../controller/child/delete');
// controller

//router
router.post("/childRegistration", verifyToken,Registration );
router.post("/childDetails", verifyToken,Details);
router.put("/childDetailsUpdate",verifyToken,Edit);
router.delete('/childDetailsDelete',verifyToken,Delete);
//router

module.exports=router;