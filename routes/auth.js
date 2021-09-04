const express = require("express");
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword,
  updateDeatils,
  updatePassword,
  logout,
} = require("../controllers/auth");
const router = express.Router();
const { protect } = require("../middleware/auth");
const User = require("../models/User");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", protect, getMe);
router.put("/updatedeatils", protect, updateDeatils);
router.put("/updatepassword", protect, updatePassword);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);

module.exports = router;
