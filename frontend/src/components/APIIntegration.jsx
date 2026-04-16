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
 Bar,
 AreaChart,
 Area,
 PieChart,
 Pie,
 Cell
} from "recharts";


const APIIntegration = () => {
  const [loading,setLoading]=useState(false)
  const [graph, setGraph]= useState([])
  const [activeIndex,setActiveIndex]=useState(0)


  const onPieEnter=(_,index)=>{
    setActiveIndex(index)
  }

  
    const data = [
        { name: 'Geeksforgeeks', students: 400 },
        { name: 'Technical scripter', students: 700 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-o-mania', students: 1000 }
    ];
   const COLORS = [
  "#f59e0b",
  "#6366f1",
  "#22c55e",
  "#ef4444",
  "#0ea5e9",
  "#a855f7",
];


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
  <div style={{ display: "flex", width: "100%", height: "800px", gap: "10px" }}>
    
    {/* LEFT COLUMN – 2 GRAPHS */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "45px" }}>
      
      {/* LINE CHART */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={graph}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value1" stroke="#82ca9d" />
            <Line type="linear" dataKey="value2" stroke="blue" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* BAR CHART */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={graph}>
            <XAxis
              dataKey="date"
              interval={0}
              textAnchor="end"
              height={80}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value1" fill="#8884d8" />
            <Bar dataKey="value2" fill="#dddd" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>

    {/* RIGHT COLUMN – 2 GRAPHS */}
    <div style={{ flex:1, display: "flex", flexDirection: "column", gap: "10px" }}>

      <div style={{flex:1, minHeight:0}}>
           <ResponsiveContainer>
          <AreaChart data={graph}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" />
                <stop offset="95%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#94a3b8" />
                <stop offset="95%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="value1"
              stroke="#f59e0b"
              fill="url(#colorUsers)"
            />
            <Area
              type="monotone"
              dataKey="value2"
              stroke="rgba(102, 102, 255, 0.8)"
              fill="url(#color2)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
     
    <div style={{flex:1,minHeight:0}}>
      <ResponsiveContainer>
  <PieChart>
    <Pie
      activeIndex={activeIndex}
      data={graph}
      labelLine={true}
    label={({ date, value1 }) => `${date}: ${value1}`}
      dataKey="value2"
      nameKey="date"
      outerRadius={100}
      onMouseEnter={onPieEnter}
    >
      {graph.map((_, index) => (
        <Cell
          key={`cell-${index}`}
          fill={COLORS[index % COLORS.length]}
        />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
  </ResponsiveContainer>
    </div>
    
    </div>

  </div>
);

};
export default APIIntegration;