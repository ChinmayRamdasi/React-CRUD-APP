const express = require("express")
const {getGraph,getDates}=require("../controllers/graph")

const router = express.Router()


router.post("/getGraph",getGraph)
router.get("/getDates",getDates)



module.exports=router   