const { connectDB } = require("../dbconfig/connection")



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
        const db= await connectDB()
        const data= await db.query("SELECT * from users")

        return res.json({
            data:data[0]
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