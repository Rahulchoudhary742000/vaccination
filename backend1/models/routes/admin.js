const express=require('express');
const app=express();
const router=express.Router();

//get body 
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
//get body 

//controller
const Login=require('../../controller/admin/login');
const Users=require('../../controller/admin/users');
const Childs=require('../../controller/admin/childs');
const AddVaccine=require('../../controller/admin/vaccine')
const GetVaccine=require('../../controller/admin/getVaccine');
//controller end

//router
router.post('/adminlogin',Login);
router.get('/getUsers',Users);
router.post('/getChildDetails',Childs);
router.post('/addvaccine',AddVaccine);
router.get('/getAllVaccines',GetVaccine)
//router end 

module.exports=router;