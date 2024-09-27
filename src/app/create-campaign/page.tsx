"use client";
import { Metadata } from "next";

import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Stepper from "@/components/CreateCampaign/Stepper";
import { useRef } from "react";

const CreateCampaign = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  return (
    <div className="h-full" ref={pageRef}>
      <DefaultLayout>
        <div className="mx-auto w-full max-w-[1080px]">
          <Stepper ref={pageRef}></Stepper>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default CreateCampaign;
