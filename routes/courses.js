const express = require("express");
const router = express.Router();
const courseCtrl = require("../controllers/courses");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/auth/google");
  }
}

module.exports = router;
