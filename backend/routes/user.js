const express = require("express");
const {
  register,
  login,
  followUser,
  logout,
  updatePassword,
  updateProfile,
  deleteMyProfile,
  myProfile,
  getUserProfile,
  getAllUsers,
  forgotPassword,
  resetPassword,
  getMyPosts,
  getUserPosts,
} = require("../controllers/User");
const { isAutheticated } = require("../middlewares/auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/follow/:id").get(isAutheticated, followUser);
router.route("/update/password").put(isAutheticated, updatePassword);
router.route("/update/profile").put(isAutheticated, updateProfile);
router.route("/delete/me").delete(isAutheticated, deleteMyProfile);
router.route("/me").get(isAutheticated, myProfile);
router.route("/my/posts").get(isAutheticated, getMyPosts);
router.route("/userposts/:id").get(isAutheticated,getUserPosts );
router.route("/user/:id").get(isAutheticated, getUserProfile);
router.route("/users").get(isAutheticated, getAllUsers);
router.route("/forgot/password").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
module.exports = router;
