import { Footer } from "antd/es/layout/layout";
import { Forecast } from "./Forecast";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-mono font-bold text-3xl text-center mb-10">
        Price Forecast
      </h1>
      <Forecast />
      <div className="absolute bottom-0 w-full text-center text-white">
        by Circle 11s
      </div>
    </main>
  );
}
