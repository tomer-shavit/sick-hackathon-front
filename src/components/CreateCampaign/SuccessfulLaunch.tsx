import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import ButtonLink from "../Buttons/ButtonLink"; // Adjust the path as needed
import useWindowSize from "@/hooks/useWindowSize";
import UpFade from "../Animations/UpFade";

interface SuccessfulLaunchProps {
  title: string;
  body: string;
}
const SuccessfulLaunch: React.FC<SuccessfulLaunchProps> = ({ title, body }) => {
  const { width, height } = useWindowSize(); // Using custom hook for window size
  const [showConfetti, setShowConfetti] = useState<boolean>(true);

  useEffect(() => {
    // Stop confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-start pt-10 text-center">
      {showConfetti && (
        <Confetti width={width} height={height} gravity={0.02} wind={0} />
      )}

      <div className="mb-6 mt-18">
        <UpFade>
          <h1 className="mb-4 text-4xl font-bold text-dark dark:text-white">
            {title}
          </h1>
        </UpFade>

        <UpFade delay={0.05}>
          <p className="text-lg text-gray-600 dark:text-gray-300">{body}</p>
        </UpFade>
      </div>

      <UpFade delay={0.1}>
        <ButtonLink
          label="Go to Campaigns"
          link="/campaigns" // Adjust the link as needed
          customClasses="bg-primary text-white py-3 px-6 rounded-md"
        />
      </UpFade>
    </div>
  );
};

export default SuccessfulLaunch;
