import { useState, useEffect } from "react";
import reactLogo2 from "../assets/thatdamhill.png";
import reactLogo3 from "../assets/caution.png";
import reactLogo4 from "../assets/strava.svg";
import axios from "axios";
// import { RotatingLines } from "react-loader-spinner";
import Display from "./Display";
// import Progressbar from "./Progressbar";

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

import { CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
      name: "Wk 1",
      kms: 32,
      pv: 2400,
      amt: 10,
    },
    {
      name: "Wk 2",
      kms: 28,
      pv: 1398,
      amt: 20,
    },
    {
      name: "Wk 3",
      kms: 36,
      pv: 9800,
      amt: 30,
    },
    {
      name: "Wk 4",
      kms: 30,
      pv: 3908,
      amt: 40,
    },
  ];
  const [recentRunCount, setrecentRunCount] = useState([0]);

  const percentage = 42;

  const employeeAPI = (
    url = "https://www.chriscalver.com/employeeregisterapibk/api/Employee/"
  ) => {
    return {
      fetchAll: () => axios.get(url),
    };
  };

  function refreshEmployeeList() {
    employeeAPI()
      .fetchAll()
      .then((res) => {
        // setEmployeeList(res.data);
        setrecentRunCount(res.data);

        console.log(res.data);
        //setRating(rating);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setTimeout(() => setcurrentTime(new Date().getTime()), 1000);
    // refreshEmployeeList();
  }, [currentTime]); // 11:30:55

  useEffect(() => {
    //setTimeout(() => setcurrentTime(new Date().getTime()), 1000);
    refreshEmployeeList();
  }, []); // 11:30:55

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


                {/* <RotatingLines width="50" height="50"
                  wrapperStyle={{
                    justifyContent: "center",
                  }}
                  /> */}
             <div style={{marginTop: 100}}>
               <h1 className="header">2024 Training Log</h1></div>
            <div>
              <img src={reactLogo4} width="200"  style={{ marginRight: 30 }}/>
            </div>
            <h1 className="header3">Last Four weeks</h1>

           
            <center>
              <BarChart
                width={400}
                height={200}
                data={data}
                margin={{
                  top: 5,
                  right: 80,
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

              <table className="table1">
                <tr>
                  <th>Total Runs:</th>
                  {/* <td>{recentRunCount[0].employeeID}</td> */}
                  <td>19</td>
                </tr>
                <tr>
                  <th>Distance:</th>
                  {/* <td>{recentRunCount[0].employeeID} kms</td> */}
                  <td>138 kms</td>
                </tr>
              </table>
              {/* <h1 className="header3">Year to Date Stats</h1> */}
              <h1 className="header3">Year to Date Stats</h1>

              <div>
                {/* <img src={reactLogo4} width="100" style={{ marginRight: 30 }}/> */}
                <table className="table1">
                  <tr>
                    <th>Total Runs:</th>
                    {/* <td>{recentRunCount[0].employeeID}</td> */}
                    <td>85</td>
                  </tr>
                  <tr>
                    <th>Distance:</th>
                    {/* <td>{recentRunCount[0].employeeID} kms</td> */}
                    <td>620 kms</td>
                  </tr>
                  <tr>
                    <th>Goal:</th>
                    {/* <td>{recentRunCount[0].employeeID} kms</td> */}
                    <td>1500 kms</td>
                  </tr>
                </table>
              </div>

              <div style={{ width: 200, height: 200, marginRight: 30 }}>
              <CircularProgressbar 
              value={percentage} 
              text={`${percentage}%`}
              
              styles={{
                // Customize the root svg element
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  
                  stroke: '#B1312A',

                  // stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'round',
                  // Customize transition animation
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  // Rotate the path
                //  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: '#C5A432',
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'butt',
                  // Rotate the trail
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                // Customize the text
                text: {
                  // Text color
                  fill: '#B1312A',
                  // Text size
                  fontSize: '16px',
                },
                // Customize background - only used when the `background` prop is true
                background: {
                  fill: '#3e98c7',
                },
              }}              
              />;
              </div>
            </center>
          </div>
        </div>
      </section>
    </div>
  );
}
