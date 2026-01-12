const express = require("express")
const {getGraph}=require("../controllers/graph")

const router = express.Router()


router.get("/getGraph",getGraph)



module.exports=router   