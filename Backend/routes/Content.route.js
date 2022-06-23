const express = require("express");
const {
  createContent,
  getContents,
} = require("../controllers/Content.controller");

const router = express.Router();

router.route("/create").post(createContent);
router.route("/").get(getContents);

module.exports = router;
