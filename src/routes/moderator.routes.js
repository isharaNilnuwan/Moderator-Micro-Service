const express = require("express");

const {getNewJokes, updateJoke, addNewType} = require("../controller/moderator.controller")

const router = express.Router();

const verifyToken = require("../middleware/auth.middleware")


router.get("/newJokes", verifyToken, getNewJokes);

router.put("/editJokes", verifyToken, updateJoke);

router.put("/addNewType", verifyToken, addNewType);

module.exports = router