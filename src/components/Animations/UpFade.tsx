"use client";

import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

interface UpFadeProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialOpacity?: number;
  initialY?: number;
}

const UpFade: React.FC<UpFadeProps> = ({
  children,
  delay = 0,
  duration = 0.2,
  initialOpacity = 0,
  initialY = 30,
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: initialOpacity, y: initialY }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration, delay }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default UpFade;
