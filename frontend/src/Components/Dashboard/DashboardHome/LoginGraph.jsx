import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useAuth } from '../../../Context/AuthContext';

function sum(array) {
  return array.reduce((acc, val) => acc + val, 0);
}

const LoginGraph = () => {
  const [totalLogin, setTotalLogin] = useState(0);
  const { currentUser } = useAuth();
  const [loginCount, setLoginCount] = useState([]);
  const [dates, setDates] = useState([]);
  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =
      nodeEnv === "production"
        ? "https://mynly.vercel.app"
        : "http://localhost:5000";
    const apiUrl = baseUrl + "/api/user/userloggedin/" + currentUser.uid;
    const fetchUserDetails = async () => {
      try{
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responseData1 = await response.json();
        console.log(responseData1[0].loginCount)
        const responseData = responseData1[0];
        const loginCount = responseData.loginCount;
        const dates = responseData.date;
        setLoginCount(loginCount);
        setTotalLogin(sum(loginCount))
        setDates(dates);
      } catch (err) {
        console.log(err);
      }
    }

    fetchUserDetails();
  }, [currentUser]);

  const options = {
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: true,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    series: [
      {
        name: currentUser.displayName,
        data: loginCount,
        color: "#1A56DB",
      },
    ],
    xaxis: {
      categories: dates,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  return (
    <>
      <div className="max-w-md w-full rounded-lg shadow bg-gray-800 p-4 md:p-6">
        <div className="flex justify-between">
          <div>
            <h5 className="leading-none text-3xl font-bold dark:text-white pb-2">{totalLogin}</h5>
            <p className="text-sm font-normal dark:text-gray-400">Logins this week</p>
          </div>
          <div className="flex justify-center items-center text-center w-[40px] h-[40px] mb-2.5 rounded-full">
            <img src="/assets/acess_logo.webp" width={30} height={30} alt="" />
          </div>
        </div>
        <ReactApexChart options={options} series={options.series} type="area" height={options.chart.height} />
      </div>
    </>
  );
}

export default LoginGraph;
