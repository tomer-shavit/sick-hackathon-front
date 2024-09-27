"use client";

import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

interface PopProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
}

const Pop: React.FC<PopProps> = ({
  children,
  delay = 0,
  duration = 0.2,
  initialScale = 0.9, // Start slightly smaller for a pop effect
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ scale: initialScale }}
        animate={{ scale: 1 }}
        transition={{ duration, delay, type: "spring", stiffness: 400 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default Pop;
