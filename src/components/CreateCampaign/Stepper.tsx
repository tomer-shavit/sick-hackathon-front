"use client";
import React, { useState, useEffect, useRef } from "react";
import { Step } from "./Step";
import Button from "../Buttons/Button";
import CreateTemplate from "./CreateTemplate";
import LaunchCampaign from "./LaunchCampaign";
import SuccessfulLaunch from "./SuccessfulLaunch";
import SelectContacts from "./SelectContacts";

const Stepper: React.FC = () => {
  const steps = ["Create Template", "Select Contacts", "Launch Campaign"];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [complete, setComplete] = useState<boolean>(false);
  const stepperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (stepperRef.current) {
      stepperRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentStep]);

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
    <div className="mx-auto max-w-7xl pt-8" ref={stepperRef}>
      {!complete && (
        <>
          <div className="mb-4 flex justify-between">
            {steps.map((step, index) => (
              <Step
                key={index}
                step={step}
                index={index}
                currentStep={currentStep}
                onClick={onClickStep}
                complete={complete}
              />
            ))}
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
