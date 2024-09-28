"use client";

import React, { useEffect } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  m,
  LazyMotion,
  domAnimation,
} from "framer-motion";

interface CampaignCardMetricProps {
  amount: number;
  title: string;
}

const CampaignCardMetric: React.FC<CampaignCardMetricProps> = ({
  amount,
  title,
}) => {
  const motionValue = useMotionValue(0);

  const roundedValue = useTransform(motionValue, (latest) =>
    Math.floor(latest).toLocaleString(),
  );

  useEffect(() => {
    const controls = animate(motionValue, amount, {
      duration: 1,
      ease: "easeOut",
    });
    return controls.stop;
  }, [amount, motionValue]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div className="text- flex flex-col items-center justify-center font-medium md:text-2xl">
        <m.span>{roundedValue}</m.span>
        <p className="flex text-sm text-dark-2 dark:text-white md:text-base">
          {title}
        </p>
      </m.div>
    </LazyMotion>
  );
};

export default CampaignCardMetric;
