import React from "react";
import { FaCloud, FaSun } from "react-icons/fa";
import SubCard from "../common/Cards/SubCard";
import { FaCloudShowersHeavy } from "react-icons/fa6";

const Weather: React.FC = () => {
  const forecastData = [
    {
      date: "Oct 17",
      icon: <FaSun size={36} className="mt-4 text-yellow-300" />,
      weather: "Sunny",
      high: 28,
      low: 22,
      rainChance: "0%",
    },
    {
      date: "Oct 18",
      icon: <FaSun size={36} className="mt-4 text-yellow-300" />,
      weather: "Sunny",
      high: 26,
      low: 21,
      rainChance: "20%",
    },
    {
      date: "Oct 19",
      icon: <FaCloud size={36} className="mt-4 text-gray-4" />,
      weather: "Cloudy",
      high: 18,
      low: 16,
      rainChance: "40%",
    },
    {
      date: "Oct 20",
      icon: <FaCloudShowersHeavy size={36} className="mt-4" />,
      weather: "Rainy",
      high: 11,
      low: 6,
      rainChance: "80%",
    },
    {
      date: "Oct 21",
      icon: <FaSun size={36} className="mt-4 text-yellow-300" />,
      weather: "Sunny",
      high: 24,
      low: 18,
      rainChance: "0%",
    },
  ];

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            Forecast
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5">
        {forecastData.map((day, index) => (
          <SubCard>
            <div key={index} className="flex flex-col items-center text-center">
              <p className="text-lg text-gray-800">{day.date}</p>
              {day.icon}
              <div className="my-2 text-2xl">{day.weather}</div>
              <p className="text-lg">
                {day.high}°C / {day.low}°C
              </p>
              <p className="mt-2 text-base">Chance of Rain: {day.rainChance}</p>
            </div>
          </SubCard>
        ))}
      </div>
    </div>
  );
};

export default Weather;
