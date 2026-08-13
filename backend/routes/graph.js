const express = require("express")
const {getGraph,getDates,getKPICard}=require("../controllers/graph")

const router = express.Router()


router.post("/getGraph",getGraph)
router.get("/getDates",getDates)
router.post("/getKPICard",getKPICard)



module.exports=router   