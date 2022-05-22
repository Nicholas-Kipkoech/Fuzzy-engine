const express =require('express')
 const {createContent } = require("../controllers/home.controller")

 const router = express.Router
 router("/").post(createContent)

  module.exports= router;