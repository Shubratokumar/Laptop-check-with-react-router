import React from "react";
import { RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,Radar,Legend, Tooltip} from "recharts";

const MyRadarChart = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <RadarChart outerRadius={90} width={590} height={400} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="month" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar
        name="Month"
        dataKey="month"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Radar
        name="Sell"
        dataKey="sell"
        stroke="#9900F0"
        fill="#FDAF75"
        fillOpacity={0.6}
      />
      <Legend />
      <Tooltip/>
    </RadarChart>
  );
};

export default MyRadarChart;
