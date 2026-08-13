import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export const KPICard = ({ title, value, change }) => {
  return (
    <div style={{
      background: "light gray",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "8px 8px 8px 8px rgba(32, 9, 9, 0.1)",
      width: "680px"
    }}>
      <h4 style={{ margin: 0, fontSize: "14px", color: "#666" }}>{title}</h4>
      <h2 style={{ margin: "4px 0", fontSize: "28px" }}>{value}</h2>
    </div>
  );
};

