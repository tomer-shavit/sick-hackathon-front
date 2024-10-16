"use client";
import React from "react";
import MainCard from "../common/Cards/MainCard";
import ChartTwo from "../Charts/ChartTwo";
import CropData from "../CropInfo/CropData";
import SensorsTable from "../CropInfo/SensorTable";

const CornView: React.FC = () => {
  return (
    <MainCard
      title="Corn Field Stats"
      innerCustomClass="bg-gray-1 grid dark:bg-gray-dark"
    >
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 h-full">
            <CropData
              fieldSize="25 square kilometers"
              cropType="Corn"
              fieldLocation="Farm #7, North Valley"
              plantingDate="April 15, 2024"
              soilPH="6.5"
              rainfall="30 mm"
            />
          </div>
          <div className="col-span-2">
            <ChartTwo />
          </div>
        </div>
        <div>
          <SensorsTable></SensorsTable>
        </div>
      </div>
    </MainCard>
  );
};

export default CornView;
