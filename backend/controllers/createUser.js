const { connectDB } = require("../dbconfig/connection")
const {get:_get}= require("lodash")



const createUser= async (req,res)=>{
    try{
    const body= req.body
    
    const db= await connectDB()
    if(body.id){
        let query=''
        query=` UPDATE users SET`
       if(body.name && body.address){
            query= query.concat(` name='${body.name}',address='${body.address}' WHERE id=${body.id}`)
        }
        else{
            new Error("Payload Incorrect")
        }

        console.log(query)

        let data= await db.query(query)

        return res.json({
            msg:"Updated successfully"
        })
    }
    else{
            let data= await db.query(`INSERT INTO users(name,address)
                        VALUES
                            ('${body.name}','${body.address}');`)
            
        // console.log(data)

            return res.json({
                msg:"Inserted"})
    }
    }
    catch(e){
        return res.json(e)
    }
}


const getUser=async(req,res)=>{
    try{
        let filters=req.query
         let offset =_get(filters, "offset") >= 0 ? _get(filters, "offset") : _get(filters, "pageNo") && _get(filters, "limit") 
         ? (_get(filters, "pageNo") - 1) * _get(filters, "limit") : 20;
        let limit = _get(filters, "limit") ? _get(filters, "limit") : 20;
        
        
        const db= await connectDB()

        let query=`select count(*) OVER() as totalCount ,name,address,id from sample.users group by name,address,id`

        if(_get(filters,"pageNo")){
            query= query.concat(` limit ${limit} OFFSET ${offset}`)
        }

        const data= await db.query(query)

        return res.json({
            data:data[0],
            count:data[0][0]?.totalCount
        })
    }
    catch(error){   
        return res.json(error)

    }
}

const deleteUser= async(req,res)=>{
    try{
    let id= req.body.id

    if(id){
        let query=`DELETE FROM users where id=${id}`
        let db= await connectDB()

        const response= await db.query(query)

        return res.json({
            msg:"Removed User from the list"
        })
    }
    else{
        console.error("Error in deleting rows")
    }
}
catch(e){
    console.log(e)
}
}


module.exports={createUser,getUser,deleteUser}