const { connectDB } = require("../dbconfig/connection")
const moment=require("moment")


const getGraph=async(req,res)=>{
    try{
    let db=await connectDB()

    const whereClause= req.query.date=="All"? "" : `WHERE date = '${moment(req.query.date).format("YYYY-MM-DD")}'`

   // console.log(whereClause)
    let data=await db.query(` SELECT date,value1,value2 from graph_table ${req.query.date ? whereClause : ''} group by date,value1,value2`)


    //console.log(data[0])

    let reduceData=data[0].reduce((acc,e)=>{
        let existingEntry=acc.find(entry=>entry.date===moment(e.date).format("YYYY-MM"))
        if(existingEntry){
            existingEntry.value1+=e.value1
            existingEntry.value2+=e.value2
        } else {
            acc.push({ ...e, date: moment(e.date).format("YYYY-MM") })
        }
        return acc
    }, [])

    return res.json({data:reduceData})
    }
    catch(e){
        console.log(e)
    }
}



module.exports={getGraph}