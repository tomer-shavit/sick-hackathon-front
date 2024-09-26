import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Stepper from "@/components/CreateCampaign/Stepper";
import CampaignDashboard from "@/components/campagins/CampaignDashboard";

export const metadata: Metadata = {
  title: "Mandao | Spread The Word",
  description: "Collect & manage user generated content with ease",
};

const CreateCampaign = () => {
  return (
    <DefaultLayout>
      <CampaignDashboard></CampaignDashboard>
    </DefaultLayout>
  );
};

export default CreateCampaign;
