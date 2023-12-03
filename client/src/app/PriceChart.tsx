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
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -45,
      legend: "Date",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Price",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    // pointBorderWidth={2}
    // pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
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
