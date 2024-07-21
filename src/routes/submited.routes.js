const express = require("express");

const getNewJokes = require("../controller/submited.controller")

const router = express.Router();

const verifyToken = require("../middleware/auth.middleware")


router.get("/unModeratedJokes", verifyToken, getNewJokes);

module.exports = router