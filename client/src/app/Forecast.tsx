"use client";
import React from "react";
import { DatePicker } from "antd";
import { PriceChart } from "./PriceChart";
import dayjs from "dayjs";
import useSWR from "swr";

const { RangePicker } = DatePicker;

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://osarogie.pythonanywhere.com"
    : "http://localhost:5001";

export function Forecast() {
  const [value, setValue] = React.useState(
    () => [dayjs("2017-08-27"), dayjs("2017-09-27")] as any
  );
  const startDate = value[0].format("YYYY-MM-DD");
  const endDate = value[1].format("YYYY-MM-DD");
  const { data, isLoading } = useSWR(
    `${BASE_URL}/predict_sales?start_date=${startDate}&end_date=${endDate}`,
    fetcher
  );
  const forecast = [
    {
      id: "forecast",
      color: "hsl(34, 70%, 50%)",
      data: data?.sales_forecast || [],
    },
  ];

  console.log(
    `http://localhost:5001/predict_sales?start_date=${startDate}&end_date=${endDate}`,
    data
  );

  return (
    <>
      <RangePicker
        size="large"
        placement="bottomRight"
        value={value}
        onChange={setValue}
      />
      <div className="h-96 w-full min-w-[800px]">
        <PriceChart data={forecast} />
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
