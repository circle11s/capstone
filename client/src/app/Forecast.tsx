"use client";
import React from "react";
import { DatePicker } from "antd";
import { PriceChart } from "./PriceChart";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

export function Forecast() {
  const [value, setValue] = React.useState(
    () => [dayjs(), dayjs().add(1, "month")] as any
  );

  return (
    <>
      <RangePicker
        size="large"
        placement="bottomRight"
        value={value}
        onChange={setValue}
      />
      <div className="h-96 w-full">
        <PriceChart data={list} />
      </div>
    </>
  );
}

const list = [
  {
    id: "prices",
    color: "hsl(34, 70%, 50%)",
    data: [
      {
        x: "1",
        y: 128,
      },
      {
        x: "2",
        y: 253,
      },
      {
        x: "3",
        y: 153,
      },
      {
        x: "4",
        y: 196,
      },
      {
        x: "5",
        y: 123,
      },
      {
        x: "6",
        y: 10,
      },
      {
        x: "7",
        y: 54,
      },
      {
        x: "8",
        y: 24,
      },
      {
        x: "9",
        y: 264,
      },
      {
        x: "10",
        y: 117,
      },
      {
        x: "11",
        y: 240,
      },
      {
        x: "12",
        y: 40,
      },
    ],
  },
];
