import React, { useEffect, useState } from "react";
import {
 LineChart,
 Line,
 XAxis,
 YAxis,
 Tooltip,
 Legend,
 ResponsiveContainer,
 CartesianGrid,
 BarChart,
 Bar
} from "recharts";


const APIIntegration = () => {
  const [loading,setLoading]=useState(false)
  const [graph, setGraph]= useState([])



  useEffect(() => {
      fetchGraph();
    }, []);


const fetchGraph= async ()=>{
  try{
    setLoading(true)
  const res= await fetch("http://localhost:5000/graph/getGraph")

  const data= await res.json()

  setGraph(data.data.map((e)=>({
    date:e.date,
    value1:e.value1,
    value2:e.value2
  })))
}
   catch (e) {
      console.error("Fetch failed", e);
    } finally {
      setLoading(false);
    }
}



 return (
   <div style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer width="40%" height="70%">
        <LineChart
          data={graph}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis angle={-45} textAnchor="end" height={80} dataKey="date"  interval={0}/>
          <YAxis />
          <Tooltip />
          <Legend />
          
          {/* ✅ dataKey must be string */}
          <Line type="monotone" dataKey="value1" stroke="#82ca9d" />
          <Line type="linear" dataKey="value2" stroke="blue" />
        </LineChart>
     

    <BarChart data={graph}>
      <XAxis
        dataKey="date"
        interval={0}
        textAnchor="end"
        height={80}
        label={{ position: 'center', value: 'XAxis title', dx:60}}
      />
      <YAxis label={{ position: 'insideTopLeft', value: 'YAxis title', angle: -90, dy: 60 }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="value1" fill="#8884d8" />
      <Bar dataKey="value2" fill="#dddd" />
    </BarChart>
     </ResponsiveContainer>
    </div>
 );
};
export default APIIntegration;