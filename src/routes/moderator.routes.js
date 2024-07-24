const express = require("express");

const {getNewJokes, updateJoke, addNewType, acceptJoke, getJokeTypes, rejectJoke} = require("../controller/moderator.controller")

const router = express.Router();

const verifyToken = require("../middleware/auth.middleware")


router.get("/newJokes", verifyToken, getNewJokes);

router.put("/editJokes", verifyToken, updateJoke);

router.post("/addNewType", verifyToken, addNewType);

router.put("/acceptJoke", verifyToken, acceptJoke);

router.delete("/rejectJoke/:id", verifyToken, rejectJoke);

router.get("/getTypes", getJokeTypes);

module.exports = router