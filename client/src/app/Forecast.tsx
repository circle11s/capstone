"use client";
import React, { useMemo } from "react";
import { DatePicker } from "antd";
import { PriceChart } from "./PriceChart";
import dayjs from "dayjs";
import useSWR from "swr";
import weeklySalesData from "./data/weekly_sales_data.json";

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
  const plot = useMemo(
    () => [
      {
        id: "historical",
        color: "hsl(34, 70%, 50%)",
        data: weeklySalesData,
      },
      {
        id: "forecasted",
        color: "hsl(34, 70%, 50%)",
        data: data?.sales_forecast || [],
      },
    ],
    [data]
  );

  return (
    <>
      <RangePicker
        size="large"
        placement="bottomRight"
        value={value}
        onChange={setValue}
      />
      <div className="h-96 w-full min-w-[300px]">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-600"></div>
          </div>
        ) : (
          <PriceChart data={plot} />
        )}
      </div>
    </>
  );
}
