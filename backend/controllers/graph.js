const { connectDB } = require("../dbconfig/connection")
const moment=require("moment")


const getGraph=async(req,res)=>{
    try{
    let db=await connectDB()

    let body= req.body

    const whereClause= body.datesArr==="All"? "" : `WHERE date IN(${body.datesArr.map((e)=>`'${moment(e.value).format("YYYY-MM-DD")}'`).join(`,`)})`

    let data=await db.query(` SELECT date,value1,value2 from graph_table ${body.datesArr ? whereClause : ''} group by date,value1,value2`)

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

const getKPICard=async(req,res)=>{
    try{
    let db=await connectDB()

    let body= req.body

    const whereClause= body.datesArr==="All"? "" : `WHERE date IN(${body.datesArr.map((e)=>`'${moment(e.value).format("YYYY-MM-DD")}'`).join(`,`)})`

    let data=await db.query(` SELECT date,value1,value2 from graph_table ${body.datesArr ? whereClause : ''} group by date,value1,value2`)

    //console.log(data[0])

    let reduceData=data[0].reduce((acc,e)=>{
        let existingEntry=acc.find(entry=>entry.date===moment(e.date).format("YYYY-MM"))
        if(existingEntry){
            existingEntry.value1+=parseInt(e.value1)
            existingEntry.value2+=parseInt(e.value2)
        } else {
            acc.push({ ...e })
        }
        return acc
    }, [])

    console.log(reduceData)
    return res.json({data:[{
        title:"Value 1",
        value:reduceData.reduce((acc,e)=>acc + e.value1,0)
    },
    {
        title:"Value 2",
        value:reduceData.reduce((acc,e)=>acc+e.value2,0)
    }
]})
    }
    catch(e){
        console.log(e)
    }
}

const getDates=async(req,res)=>{
    try{
    let db=await connectDB()

    let data=await db.query(`SELECT DISTINCT date from graph_table`)
    
    const fomattedDates= data[0].map(e=>moment(e.date).format("YYYY-MM"))
    return res.json({data:fomattedDates})
    }
    catch(e){
        console.log(e)
    }
}




module.exports={getGraph,getDates,getKPICard}