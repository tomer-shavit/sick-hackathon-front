import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import CornView from "@/components/Campaigns/CampaignDashboard";

export const metadata: Metadata = {
  title: "FelixFarm | Use Every Drop",
  description: "Collect & manage user generated content with ease",
};

const CreateCampaign = () => {
  return (
    <DefaultLayout>
      <CornView></CornView>
    </DefaultLayout>
  );
};

export default CreateCampaign;
