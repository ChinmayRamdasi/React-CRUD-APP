
import axios from "axios";

const fetchUser=async()=>{
    const data = await axios.post({
        url:"http://localhost:5000/users/getUsers",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({pageNo:1,limit:12})
    })

    const res= await data.json()

    return res
}


///use this in the component 
useEffect(()=>{
    fetchUser()
},[])