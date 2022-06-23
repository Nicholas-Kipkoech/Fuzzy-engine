const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  getUsersById,
  userLogin,
  deleteUser,
} = require("../controllers/User.controller");

router.route("/create").post(createUser);
router.route("/").get(getUsers);
router.route("/:id").get(getUsersById);
router.route("/login").post(userLogin);
router.route("/delete/:id").delete(deleteUser);

module.exports = router;
