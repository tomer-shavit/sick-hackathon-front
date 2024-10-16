"use client";
import React from "react";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import ContactsTable from "../Tables/ContactsTable";
import DataStatsOne from "@/components/DataStats/DataStatsOne";
import Weather from "@/components/Charts/ChartOne";
import { CropsComponent } from "../Crops/CropsComponent";

const Overview: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <DataStatsOne />
      </div>
      <div className="mt-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <Weather />
        <CropsComponent />
      </div>
    </>
  );
};

export default Overview;
