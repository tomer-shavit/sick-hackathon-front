"use client";
import React, { useState } from "react";
import { Step } from "./Step";
import MainCard from "../common/Cards/MainCard";
import Button from "../Buttons/Button";

const bodyPlaceholder = `We'd love to hear from you!\nShare a quick video of your experience with [Product/Service] and get a special discount on your next purchase.\nJust record your video, click the link below,, and enjoy the reward. It's that simple!\n
[Click here to upload your video] Thank you for being part of the [Brand Name] family!`;

const Stepper: React.FC = () => {
  const steps = ["Create Template", "Select Contacts", "Launch Campaign"];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [complete, setComplete] = useState<boolean>(false);

  const onClick = () => {
    if (currentStep === steps.length) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <Step
            key={index}
            step={step}
            index={index}
            currentStep={currentStep}
            complete={complete}
          />
        ))}
      </div>

      <MainCard title="Create a Template" customClass="mt-4">
        <div className="flex flex-col gap-6 p-6.5 pt-4">
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Subject Line
            </label>
            <input
              type="text"
              placeholder="Share a quick video and enjoy a discount on us!"
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Email Body
            </label>
            <textarea
              rows={6}
              placeholder={bodyPlaceholder}
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>
        </div>
      </MainCard>
      {!complete && (
        <div className="flex justify-end">
          <Button
            label={currentStep === steps.length ? "Finish" : "Next"}
            onClick={onClick}
            customClasses="mt-4"
          ></Button>
        </div>
      )}
    </>
  );
};

export default Stepper;
