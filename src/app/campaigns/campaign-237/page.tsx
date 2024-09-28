import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import CampaignDashboard from "@/components/Campaigns/CampaignDashboard";

export const metadata: Metadata = {
  title: "Mandao | Spread The Word",
  description: "Collect & manage user generated content with ease",
};

const Campaign237 = () => {
  return (
    <DefaultLayout>
      <CampaignDashboard></CampaignDashboard>
    </DefaultLayout>
  );
};

export default Campaign237;
