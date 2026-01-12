import React from "react";
import {
 LineChart,
 Line,
 XAxis,
 YAxis,
 Tooltip,
 Legend,
 ResponsiveContainer,
 CartesianGrid
} from "recharts";
const data = [
 { date: "2025-01-01", value: 16, value1:45 },
 { date: "2025-01-02", value: 12, value1:34},
 { date: "2025-01-03", value: 18, value1:44},
 { date: "2025-01-04", value: 10, value1:10}
];

const APIIntegration = () => {
 return (
   <ResponsiveContainer width="50%" aspect={4 / 3}>
     <LineChart
       data={data}
       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
     >
       <CartesianGrid/>
       <XAxis dataKey="date" />
       <YAxis />
       <Tooltip />
       <Legend />
       <Line type="monotone" dataKey="value" stroke="#82ca9d" activeDot={{ r: 8 }} />
       <Line type="linear" dataKey="value1" stroke="blue" activeDot={{ r: 8 }} />
     </LineChart>
   </ResponsiveContainer>
 );
};
export default APIIntegration;