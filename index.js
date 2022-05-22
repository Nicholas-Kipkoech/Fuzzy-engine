const express = require('express');
const dotenv = require('dotenv');

dotenv.config()
const app = express()


// pull in mongoDB
require("./config/config")

//pull in router

const Home = require("./routes/home.routes")

app.use(express.json())
app.use("/create",Home)



const port = process.env.PORT

app.listen(port,()=> console.log(`app listening on port ${port}`))