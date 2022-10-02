const express = require("express");
const {
  createPost,
  likeAndUnlikePost,
  deletePost,
  getPostOfFollowing,
  updateCaption,
  commentOnPost,
  deleteComment,
} = require("../controllers/post");
const { isAutheticated } = require("../middlewares/auth");
const router = express.Router();

router.route("/post/upload").post(isAutheticated, createPost);
router
  .route("/post/:id")
  .get(isAutheticated, likeAndUnlikePost).put(isAutheticated,updateCaption)
  .delete(isAutheticated, deletePost);
router.route("/posts").get(isAutheticated, getPostOfFollowing);
router.route("/post/comment/:id").put(isAutheticated, commentOnPost).delete(isAutheticated,deleteComment)
module.exports = router;
