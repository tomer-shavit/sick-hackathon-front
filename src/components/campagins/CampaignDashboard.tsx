import React from "react";
import MainCard from "../common/Cards/MainCard";
import CampaignManagementCard from "./CampaignManagementCard";

const CampaignDashboard: React.FC = () => {
  return (
    <MainCard title="Campaigns" customClass="bg-gray-50">
      <div className="p-4">
        <CampaignManagementCard
          title="Before & After Campaign"
          description="This campaign asking for images before they used my product and after."
          status="Pending"
          metrics={{
            delivered: 0,
            opened: 0,
            clicked: 0,
            converted: 0,
          }}
        />
        <CampaignManagementCard
          title="Video Review Campaign"
          description="Asking for video reviews for 30% Off next purchase"
          status="Active"
          metrics={{
            delivered: 3826,
            opened: 1843,
            clicked: 1480,
            converted: 1178,
          }}
        />
        <CampaignManagementCard
          title="Crazy Location Compatition"
          description="Asking for videos from the craziest places in the world with my product"
          status="Active"
          metrics={{
            delivered: 12731,
            opened: 8329,
            clicked: 6017,
            converted: 4872,
          }}
        />
      </div>
    </MainCard>
  );
};

export default CampaignDashboard;
