const express = require("express");
const router = express.Router();

const {loginValidation} = require("../middleware/authvalidation.middleware")
const { login, register, userProfile, users} = require("../controller/auth.controller")
const verifyToken = require("../middleware/auth.middleware") 

// router.post("/register", regsiterValidation, register);

router.post("/", loginValidation, login);

// router.get("/profile/:id", verifyToken, userProfile);

// router.get("/users", verifyToken, users);

module.exports = router;