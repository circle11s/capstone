"use client";
import { Theme } from "@nivo/core";
import { ResponsiveLine, Serie } from "@nivo/line";

type Props = {
  data: Serie[];
};

export const PriceChart = ({ data }: Props) => (
  <ResponsiveLine
    data={data}
    theme={theme}
    // margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    // xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      // min: "auto",
      // max: "auto",
      // stacked: true,
      // reverse: false,
    }}
    curve="monotoneX"
    // yFormat=" >-.2f"
    // axisTop={null}
    // axisRight={null}
    axisBottom={{
      format: "%b %d, %y",
      // tickSize: 5,
      // tickPadding: 5,
      tickRotation: -45,
      legend: "Date",
      // legendOffset: 36,
      legendPosition: "middle",
      legendOffset: -12,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Price",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    // pointSize={10}
    pointColor={{ theme: "background" }}
    // pointBorderWidth={2}
    // pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    // enablePointLabel
    margin={{
      bottom: 60,
      left: 80,
      right: 20,
      top: 20,
    }}
    pointBorderColor={{
      from: "color",
      modifiers: [["darker", 0.3]],
    }}
    pointBorderWidth={1}
    pointSize={16}
    xFormat="time:%Y-%m-%d"
    xScale={{
      format: "%Y-%m-%d",
      precision: "day",
      type: "time",
      useUTC: false,
    }}
  />
);

const theme: Theme = {
  text: {
    fill: "#fff",
    accentColor: "#fff",
    opacity: 1,
  },
  axis: {
    legend: {
      text: { fill: "#ffffff" },
    },
    domain: {
      line: {
        stroke: "#777777",
        strokeWidth: 1,
        fill: "#fff",
      },
    },
    ticks: {
      text: {
        accentColor: "#000",
        fill: "#fff",
      },
      line: {
        stroke: "#777777",
        strokeWidth: 1,
      },
    },
  },
  grid: {
    line: {
      stroke: "#222222",
      strokeWidth: 1,
    },
  },
  labels: {
    text: { fill: "#000" },
  },
  tooltip: {
    basic: {
      color: "#000",
    },
  },
  annotations: {
    text: { color: "#000" },
  },
};
