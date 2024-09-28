"use client";
import React, { useState, useEffect } from "react";
import { Step } from "./Step";
import Button from "../Buttons/Button";
import CreateTemplate from "./CreateTemplate";
import LaunchCampaign from "./LaunchCampaign";
import SuccessfulLaunch from "./SuccessfulLaunch";
import SelectContacts from "./SelectContacts";
import Pop from "../Animations/Pop";
import PopUpCard from "../common/Cards/PopUpCard";

const Stepper: React.FC = () => {
  const steps = ["Create Template", "Select Contacts", "Launch Campaign"];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [complete, setComplete] = useState<boolean>(false);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [isLater, setIsLater] = useState(false);

  useEffect(() => {
    document?.getElementById("Header")?.scrollIntoView({ behavior: "smooth" });
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
    setIsPopUpVisible(true);
  };

  const handleConfirmLaunch = () => {
    setIsLater(false);
    console.log(isLater);
    setIsPopUpVisible(false);
    onClickNext();
  };

  const handleSendLater = () => {
    setIsLater(true);
    console.log(isLater);
    onClickNext();
  };

  return (
    <div className="mx-auto max-w-7xl">
      {!complete && (
        <>
          <div className="mb-4 flex justify-between">
            {steps.map((step, index) => {
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
              <div className="mt-4 flex justify-evenly md:justify-end">
                <Button
                  label="Save Campaign For Later"
                  onClick={handleSendLater}
                  customClasses="mr-4"
                  variant="outlined"
                />
                <Button label="Send Now" onClick={handleSendNow} />
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

      {complete && (
        <SuccessfulLaunch
          title="🎉 Congratulations! 🎉"
          body={`Your campaign has been ${isLater ? "scheduled for later 🕒" : "successfully launched! 🚀"}`}
        />
      )}

      {isPopUpVisible && (
        <PopUpCard onClose={() => setIsPopUpVisible(false)}>
          <div className="flex max-w-lg flex-col text-center text-xl ">
            <h3 className="mb-6 font-medium">
              Are you sure you want to launch this campaign now?
            </h3>
            <div className="flex justify-evenly space-x-4">
              <Button
                label="Cancel"
                onClick={() => setIsPopUpVisible(false)}
                variant="outlined"
              />
              <Button label="Confirm" onClick={handleConfirmLaunch} />
            </div>
          </div>
        </PopUpCard>
      )}
    </div>
  );
};

export default Stepper;
