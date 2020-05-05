const express = require("express");
const router  = express.Router();
const authController =require("../controllers/auth.controller");
const loginValidate = require('../validate/login.validate');

router.get("/login",authController.loginPage);
router.get("/logout",authController.logout);
router.post('/login',loginValidate.postLogin,authController.checkLogin);


module.exports = router;