import React from "react";
import { dataStats } from "@/types/dataStats";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import { WiDaySprinkle } from "react-icons/wi";

const dataStatsList = [
  {
    icon: <MdOutlineWaterDrop size={30} className="text-white"/>,
    color: "#17BFFF",
    title: "Total Water Usage",
    value: "45000L",
    growthRate: 0.43,
  },
  {
    icon: <FaHandHoldingWater size={30} className="text-white"/>,
    color: "#FF9C55",
    title: "Water Saved",
    value: "15000L",
    growthRate: 4.35,
  },
  {
    icon: <WiDaySprinkle size={30} className="text-white"/>,
    color: "#5750F1",
    title: "Water Usage Effeciency",
    value: "15.465",
    growthRate: 5.95,
  },
 {
    icon: <GiFarmer size={30} className="text-white"/>,
    color: "#17BFFF",
    title: "Total Crop Yield",
    value: "35.4%",
    growthRate: 15.95,
  },
];

const DataStatsOne: React.FC<dataStats> = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {dataStatsList.map((item, index) => (
          <div
            key={index}
            className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark"
          >
            <div
              className="flex h-14.5 w-14.5 items-center justify-center rounded-full"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
                  {item.value}
                </h4>
                <span className="text-body-sm font-medium">{item.title}</span>
              </div>

              <span
                className={`flex items-center gap-1.5 text-body-sm font-medium ${
                  item.growthRate > 0 ? "text-green" : "text-red"
                }`}
              >
                {item.growthRate}%
                {item.growthRate > 0 ? (
                  <svg
                    className="fill-current"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.35716 2.3925L0.908974 5.745L5.0443e-07 4.86125L5 -5.1656e-07L10 4.86125L9.09103 5.745L5.64284 2.3925L5.64284 10L4.35716 10L4.35716 2.3925Z"
                      fill=""
                    />
                  </svg>
                ) : (
                  <svg
                    className="fill-current"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.64284 7.6075L9.09102 4.255L10 5.13875L5 10L-8.98488e-07 5.13875L0.908973 4.255L4.35716 7.6075L4.35716 7.6183e-07L5.64284 9.86625e-07L5.64284 7.6075Z"
                      fill=""
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DataStatsOne;
