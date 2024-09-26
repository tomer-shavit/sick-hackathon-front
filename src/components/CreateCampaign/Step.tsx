import React from "react";
import { TiTick } from "react-icons/ti";

interface StepProps {
  step: string;
  index: number;
  currentStep: number;
  onClick: (index: number) => void;
  complete: boolean;
}

const Step: React.FC<StepProps> = ({
  step,
  index,
  currentStep,
  onClick,
  complete,
}) => {
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
    <div
      className="w mt-8 flex w-full cursor-pointer flex-col items-center"
      onClick={() => onClick(index + 1)}
    >
      <div className={stepCircleClasses}>
        {isComplete ? <TiTick size={24} /> : index + 1}
      </div>
      <h3 className="mb-1 text-center text-heading-7 font-bold text-dark dark:text-white">
        {step}
      </h3>
    </div>
  );
};

export { Step };
