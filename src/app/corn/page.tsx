import Overview from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import CornView from "@/components/Campaigns/CampaignDashboard";

export const metadata: Metadata = {
  title: "FelixFarm | Use Every Drop",
  description: "Water your crops like a pro",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <CornView></CornView>
      </DefaultLayout>
    </>
  );
}
