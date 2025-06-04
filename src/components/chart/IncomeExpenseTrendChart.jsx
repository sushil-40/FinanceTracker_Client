/* eslint-disable react/prop-types */
import { ResponsiveLine } from "@nivo/line";

const IncomeExpenseTrendChart = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    xScale={{ type: "point" }} // 'point' scale for categorical data (dates)
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: false,
    }}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Date",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Income ($)",

      legendOffset: -40,
      legendPosition: "middle",
    }}
    // colors={["#00FF00"]} // Green for income line
    colors={({ id }) => (id === "Income" ? "#45BD00" : "#EB3E09")}
    lineWidth={3}
    enablePoints={true} // Display points on the line
    pointSize={6}
    pointColor={{ from: "color", modifiers: [["darker", 0.4]] }}
    pointBorderWidth={2}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 0,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: { itemTextColor: "#000" },
          },
        ],
      },
    ]}
  />
);

export default IncomeExpenseTrendChart;
