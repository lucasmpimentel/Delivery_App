const express = require("express");

const loginService = require("../services/auth.service");

const loginRouter = express.Router();

loginRouter.post(
  "/",
  rescue(async (req, res) => {
    const token = await authService.authenticate(req.body);
    res.status(200).json({ token });
  })
);

module.exports = loginRouter;
