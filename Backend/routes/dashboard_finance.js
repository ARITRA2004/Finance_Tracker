const express = require("express");
const {userAuth} = require('../middleware/authetication');
const dashboardRoute = express.Router();

dashboardRoute.get('/dashboard',userAuth,(req,res)=>{
    
})