const express = require("express");
const jwt = require("jsonwebtoken");

const asyncHandler = require("express-async-handler");

require("dotenv").config();


const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({
      message: "Authentication Failed",
    });
  }

  let jwtToken = jwt.sign(
    {
      email: email,
      userId: process.env.USER_ID,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  return res.status(200).json({
    accessToken: jwtToken,
    userId: process.env.ADMIN_PASSWORD,
  });
});

module.exports = {
  login
};
