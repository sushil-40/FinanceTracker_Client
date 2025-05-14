// BarChart.js
import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const IncomeExpenseBarChart = ({ data }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={["income", "expense"]} // Define the data fields to be displayed
      indexBy="date" // X-axis will be dates
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped" // Makes it a grouped bar chart
      // colors={{ scheme: "set1" }} // Different color scheme options
      // Custom color function based on the key (income or expense)
      colors={({ id }) => (id === "income" ? "green" : "red")}
      axisBottom={{
        tickRotation: -45,
        legend: "Date",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        legend: "Amount",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          itemWidth: 100,
          itemHeight: 20,
          itemsSpacing: 2,
          symbolSize: 20,
        },
      ]}
    />
  );
};

export default IncomeExpenseBarChart;
