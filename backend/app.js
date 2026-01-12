const express = require("express");
const app = express();
const user= require("./routes/user")
const graph= require("./routes/graph")
const cors= require("cors")




app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use("/users",user)

app.use("/graph",graph)

module.exports = app;

