// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import { ResponsivePie } from "@nivo/pie";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const IncomeExpensePieChart = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 88, bottom: 80, left: 88 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#232323"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 9]],
    }}
    defs={[
      {
        id: "stylus-pattern",
        type: "patternDots",
        background: "#45BD00", // Green background for stylus (income)
        color: "rgba(0, 153, 255, 0.6)", // Color overlay
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "hack-pattern",
        type: "patternDots",
        background: "#EB3E09", // Red background for hack (expense)
        color: "rgba(224, 20, 243, 0.59)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: { id: "income" },
        id: "stylus-pattern",
      },
      {
        match: { id: "expense" },
        id: "hack-pattern",
      },
    ]}
    colors={["#45BD00", "#EB3E09"]}
    /* Explicitly defining colors */
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "black",
        itemDirection: "left-to-right",

        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        symbolColor: (d) => {
          if (d.id === "stylus") return "#45BD00"; // Green for stylus
          if (d.id === "hack") return "#EB3E09"; // Red for hack
          return "gray"; // Default gray color
        },
        // Use inherit to match the color of the pie slice
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export default IncomeExpensePieChart;
