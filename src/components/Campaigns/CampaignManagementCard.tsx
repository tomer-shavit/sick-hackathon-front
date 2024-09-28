import React from "react";
import SubCard from "../common/Cards/SubCard";
import StatusPill from "../common/Pills/StatusPill";
import CampaignCardMetric from "./CampaignCardMetric";

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
    <SubCard customClass="cursor-pointer">
      <h2 className="text-xl font-semibold text-dark dark:text-white">
        {title}
      </h2>
      <p className="text-base text-dark dark:text-white ">{description}</p>
      <StatusPill status={status}></StatusPill>

      <div className="grid grid-cols-4 gap-4 text-center text-dark dark:text-white">
        <CampaignCardMetric title="Coupons Used" amount={metrics.converted} />
        <CampaignCardMetric title="Links Clicked" amount={metrics.clicked} />
        <CampaignCardMetric title="Emails Opened" amount={metrics.opened} />
        <CampaignCardMetric title="Emails Sent" amount={metrics.delivered} />
      </div>
    </SubCard>
  );
};

export default CampaignManagementCard;
