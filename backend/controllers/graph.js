const { connectDB } = require("../dbconfig/connection")
const moment=require("moment")


const getGraph=async(req,res)=>{
    try{
    let db=await connectDB()

    let data=await db.query(` SELECT * from graph_table`)
    console.log(data[0])

    return res.json({data:data[0].map((e)=>({
        date:moment(e.date).format("YYYY-MM-DD"),
        value1:e.value1,
        value2:e.value2
    }))})
    }
    catch(e){
        console.log(e)
    }
}



module.exports={getGraph}