import React from "react";
import { TiTick } from "react-icons/ti";

interface StepProps {
  step: string;
  index: number;
  currentStep: number;
  complete: boolean;
}

const Step: React.FC<StepProps> = ({ step, index, currentStep, complete }) => {
  const isActive = currentStep === index + 1;
  const isComplete = index + 1 < currentStep || complete;

  // Classes for the step circle
  let stepCircleClasses =
    "w-10 h-10 flex items-center justify-center z-10 relative rounded-full font-semibold text-white";

  if (isComplete) {
    stepCircleClasses += " bg-green";
  } else if (isActive) {
    stepCircleClasses += " bg-primary";
  } else {
    stepCircleClasses += " bg-gray-6";
  }

  return (
    <div className="w mt-8 flex w-full flex-col items-center">
      <div className={stepCircleClasses}>
        {isComplete ? <TiTick size={24} /> : index + 1}
      </div>
      <h3 className="text-heading-7 mb-1 text-center font-bold text-dark dark:text-white">
        {step}
      </h3>
    </div>
  );
};

export { Step };
