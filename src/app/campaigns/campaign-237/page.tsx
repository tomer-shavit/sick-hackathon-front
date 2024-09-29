import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import CampaignDashboard from "@/components/Campaigns/CampaignDashboard";
import ManageCampaign from "@/components/ManageCampaign/ManageCampaign";

export const metadata: Metadata = {
  title: "Mandao | Spread The Word",
  description: "Collect & manage user generated content with ease",
};

const Campaign237 = () => {
  return (
    <DefaultLayout>
      <ManageCampaign campaignName="Video Review Campaign"></ManageCampaign>
    </DefaultLayout>
  );
};

export default Campaign237;
