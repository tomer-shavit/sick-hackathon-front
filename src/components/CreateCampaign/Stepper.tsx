"use client";
import React, { useState, useEffect } from "react";
import { Step } from "./Step";
import Button from "../Buttons/Button";
import CreateTemplate from "./CreateTemplate";
import LaunchCampaign from "./LaunchCampaign";
import SuccessfulLaunch from "./SuccessfulLaunch";
import SelectContacts from "./SelectContacts";
import Pop from "../Animations/Pop";

const Stepper: React.FC = () => {
  const steps = ["Create Template", "Select Contacts", "Launch Campaign"];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    document?.getElementById("Header")?.scrollIntoView({ behavior: "smooth" }); // scrolls to header
  }, [currentStep, complete]);

  const onClickNext = () => {
    if (currentStep === steps.length) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const onClickStep = (index: number) => {
    setCurrentStep(index);
  };

  const handleSendNow = () => {
    console.log("Send Now clicked");
    onClickNext();
  };

  const handleSendLater = () => {
    console.log("Send Later clicked");
    onClickNext();
  };

  return (
    <div className="mx-auto max-w-7xl">
      {!complete && (
        <>
          <div className="mb-4 flex justify-between">
            {steps.map((step, index) => {
              // Only apply the Pop animation to the current step
              const isCurrentStep = currentStep - 1 === index;
              return (
                <div key={index} className="mx-auto max-w-6xl">
                  {isCurrentStep ? (
                    <Pop>
                      <Step
                        step={step}
                        index={index}
                        currentStep={currentStep}
                        onClick={onClickStep}
                        complete={complete}
                      />
                    </Pop>
                  ) : (
                    <Step
                      step={step}
                      index={index}
                      currentStep={currentStep}
                      onClick={onClickStep}
                      complete={complete}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4">
            {!complete && currentStep === 1 && <CreateTemplate />}
            {!complete && currentStep === 2 && <SelectContacts />}
            {!complete && currentStep === 3 && <LaunchCampaign />}
          </div>

          <div className="w-full">
            {currentStep === steps.length ? (
              <div className="flex justify-between">
                <Button
                  label="Send Later"
                  onClick={handleSendLater}
                  customClasses="mt-4"
                  variant="outlined"
                />
                <Button
                  label="Send Now"
                  onClick={handleSendNow}
                  customClasses="mt-4"
                />
              </div>
            ) : (
              <div className="flex justify-end">
                <Button
                  label={currentStep === steps.length ? "Finish" : "Next"}
                  onClick={onClickNext}
                  customClasses="mt-4"
                />
              </div>
            )}
          </div>
        </>
      )}

      {complete && <SuccessfulLaunch />}
    </div>
  );
};

export default Stepper;
