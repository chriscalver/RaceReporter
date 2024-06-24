import { useState, useEffect } from "react";
import reactLogo2 from "../assets/thatdamhill.png";
import reactLogo3 from "../assets/caution.png";

import Display from "./Display";
import Progressbar from "./Progressbar";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Center() {
  const endTime = new Date("Sept 21, 2024 08:00:00").getTime();
  const [currentTime, setcurrentTime] = useState(new Date().getTime());
  const gap = endTime - currentTime; //177670892

  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingDays = Math.floor(gap / days);
  const remainingHours = Math.floor((gap % days) / hours);
  const remainingMinutes = Math.floor((gap % hours) / minutes);
  const remainingSeconds = Math.floor((gap % minutes) / seconds);

  const data = [
    {
      name: "Week 1",
      kms: 32,
      pv: 2400,
      amt: 10,
    },
    {
      name: "Week 2",
      kms: 28,
      pv: 1398,
      amt: 20,
    },
    {
      name: "Week 3",
      kms: 36,
      pv: 9800,
      amt: 30,
    },
    {
      name: "Week 4",
      kms: 30,
      pv: 3908,
      amt: 40,
    },
  ];

  useEffect(() => {
    setTimeout(() => setcurrentTime(new Date().getTime()), 1000);
  }, [currentTime]); // 11:30:55

  return (
    <div>
      <section className="content_section">
        <div className="container2">
          <div className="item item-1"></div>
          <div className="item item-2">
            <img src={reactLogo2} className="mainlogo" />
          </div>
          <div className="item item-3"></div>
          <div className="item item-4">
            <img src={reactLogo3} className="mainlogo2" />
            <h1 className="header">24hr RACE</h1>
            <h1 className="header2">starts in</h1>

            <center>
              <Display
                days={remainingDays}
                hours={remainingHours}
                minutes={remainingMinutes}
                seconds={remainingSeconds}
              />
            </center>

            {/* <div>Race Reporter</div> */}
          </div>
          <div className="item item-5" id="chart">
            {/* <Progressbar /> */}
            <center>
            <h3 className="header2">4 Week Training History</h3>
            <BarChart
              width={360}
              height={200}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="amt" />
              <Tooltip />
              <Legend />
              {/* <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} /> */}
              <Bar
                dataKey="kms"
                fill="#B1312A"
                activeBar={<Rectangle fill="#C5A432" stroke="purple" />}
              />
            </BarChart>
            </center>
          </div>
        </div>
      </section>
    </div>
  );
}
