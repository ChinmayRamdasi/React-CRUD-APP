const express = require("express");
const app = express();
const user= require("./routes/user")
const cors= require("cors")




app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use("/users",user)

module.exports = app;

