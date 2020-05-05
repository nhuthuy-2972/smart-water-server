const express = require("express");
const router  = express.Router();
const userController =require("../controllers/user.controller");



router.get("/",userController.index);
//router.get("/pondManager",userController.pondManager);
//router.get("/sensorManager",userController.sensorManager);


module.exports = router;