const express = require("express")
const {createUser,getUser, deleteUser}=require("../controllers/createUser")

const router = express.Router()


router.post("/createUser",createUser)
router.get("/getUser",getUser)
router.put("/updateUser",createUser)
router.delete("/deleteUser",deleteUser)


module.exports=router   