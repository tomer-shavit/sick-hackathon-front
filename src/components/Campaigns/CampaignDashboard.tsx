import React from "react";
import MainCard from "../common/Cards/MainCard";
import UpFade from "../Animations/UpFade";
import CampaignManagementCard from "./CampaignManagementCard";
import Link from "next/link";

const CampaignDashboard: React.FC = () => {
  return (
    <MainCard title="Campaigns" innerCustomClass="bg-gray-1 dark:bg-gray-dark">
      <div className="p-4 ">
        <UpFade>
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
        </UpFade>
        <UpFade delay={0.05}>
          <Link href={"/campaigns/campaign-237"}>
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
          </Link>
        </UpFade>
        <UpFade delay={0.1}>
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
        </UpFade>
      </div>
    </MainCard>
  );
};

export default CampaignDashboard;
