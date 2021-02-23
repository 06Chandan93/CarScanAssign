import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

// Here BarChart Import from Rechart Library

// dummy Data 
const data=[
  {name:'Facebook',value:20000},
  {name:'Twitter',value:15000},
  {name:'Instagram',value:30000},
  {name:'Telegram',value:35000},
];

// Function For Chart
const Chart=()=>{
  return (
    <div>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 25,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />

    </BarChart>
    </div>
  );
}

export default Chart;
