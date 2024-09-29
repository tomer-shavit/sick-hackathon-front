"use client";
import React, { useState } from "react";
import MainCard from "../common/Cards/MainCard";
import UpFade from "../Animations/UpFade";
import ClickOutside from "../ClickOutside"; // Ensure this import points to the correct location

interface ManageCampaignProps {
  campaignName: string;
}

const videos = Array.from({ length: 12 }, (_, index) => `${index + 1}.mp4`);

const ManageCampaign: React.FC<ManageCampaignProps> = ({ campaignName }) => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  return (
    <MainCard
      title={campaignName}
      innerCustomClass="bg-gray-1 dark:bg-gray-dark"
    >
      <div className="grid grid-cols-2 gap-4 p-6 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video, idx) => (
          <UpFade delay={0.075 * idx} key={idx}>
            <div className="relative">
              <video
                className="h-auto w-full cursor-pointer rounded-lg"
                src={`/videos/${video}`}
                onClick={() => setCurrentVideo(`/videos/${video}`)}
                muted
                playsInline
              />
            </div>
          </UpFade>
        ))}
      </div>

      {/* Video Player Modal */}
      {currentVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <ClickOutside onClick={() => setCurrentVideo(null)}>
            <div className="relative w-full max-w-md">
              <video
                className="h-auto w-full rounded-lg"
                src={currentVideo}
                controls
                autoPlay
              />
              <button
                onClick={() => setCurrentVideo(null)}
                className="absolute right-2 top-2 text-xl text-white"
              >
                &times;
              </button>
            </div>
          </ClickOutside>
        </div>
      )}
    </MainCard>
  );
};

export default ManageCampaign;
