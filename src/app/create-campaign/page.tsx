import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Stepper from "@/components/CreateCampaign/Stepper";

export const metadata: Metadata = {
  title: "Mandao | Spread The Word",
  description: "Collect & manage user generated content with ease",
};

const CreateCampaign = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Stepper></Stepper>
      </div>
    </DefaultLayout>
  );
};

export default CreateCampaign;
