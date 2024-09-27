import React from "react";
import UpFade from "../Animations/UpFade";

interface CampaignMetrics {
  delivered: number;
  opened: number;
  clicked: number;
  converted: number;
}

interface CampaignManagementCardProps {
  title: string;
  description: string;
  status: "Active" | "Pending";
  metrics: CampaignMetrics;
}

const CampaignManagementCard: React.FC<CampaignManagementCardProps> = ({
  title,
  description,
  status,
  metrics,
}) => {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md dark:border-dark-3 dark:bg-gray-8">
      <h2 className="text-lg font-semibold text-dark dark:text-white">
        {title}
      </h2>
      <p className="text-sm text-dark dark:text-white ">{description}</p>
      <div className="my-2 flex items-center space-x-2">
        <span
          className={`rounded-full px-2 py-1 text-sm ${
            status === "Active"
              ? "bg-green-200 text-green-800"
              : "bg-yellow-200 text-yellow-800"
          }`}
        >
          {status}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-4 text-center text-dark dark:text-white">
        <div>
          <div className="text-lg font-medium">{metrics.converted}</div>
          <div className="text-sm text-dark-2 dark:text-white">Converted</div>
        </div>

        <div>
          <div className="text-lg font-medium">{metrics.clicked}</div>
          <div className="text-sm text-dark-2 dark:text-white">Clicked</div>
        </div>

        <div>
          <div className="text-lg font-medium">{metrics.opened}</div>
          <div className="text-sm text-dark-2 dark:text-white">Opened</div>
        </div>
        <div>
          <div className="text-lg font-medium">{metrics.delivered}</div>
          <div className="text-sm text-dark-2 dark:text-white">Delivered</div>
        </div>
      </div>
    </div>
  );
};

export default CampaignManagementCard;
