const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  getUsersById,
} = require("../controllers/User.controller");

router.route("/create").post(createUser);
router.route("/").get(getUsers);
router.route("/:id").get(getUsersById);

module.exports = router;
