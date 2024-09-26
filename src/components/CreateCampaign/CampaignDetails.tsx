import React from "react";
import MainCard from "../common/Cards/MainCard";
import ValidatedInput from "../common/Input/ValidatedInput";
import useLocalStorage from "@/hooks/useLocalStorage"; // Ensure the correct path to the hook

const CampaignDetails: React.FC = () => {
  const [campaignName, setCampaignName] = useLocalStorage(
    "campaignName",
    "Video Review Campaign",
  );
  const [couponCode, setCouponCode] = useLocalStorage(
    "couponCode",
    "MYAWESOMECOUPON30",
  );

  return (
    <MainCard title="Set up your campaign">
      <div className="flex flex-col gap-6 p-6.5 pt-4">
        <ValidatedInput
          label="Campaign Name"
          placeholder="Video Review Campaign"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)} // Save to localStorage on change
        />
        <ValidatedInput
          label="Coupon Code"
          placeholder="MYAWESOMECOUPON30"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)} // Save to localStorage on change
        />
      </div>
    </MainCard>
  );
};

export default CampaignDetails;
