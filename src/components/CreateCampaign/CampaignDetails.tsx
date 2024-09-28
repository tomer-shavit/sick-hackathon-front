import React from "react";
import MainCard from "../common/Cards/MainCard";
import ValidatedInput from "../common/Input/ValidatedInput";
import useLocalStorage from "@/hooks/useLocalStorage"; // Ensure the correct path to the hook

const CampaignDetails: React.FC = () => {
  const [campaignName, setCampaignName] = useLocalStorage("campaignName", "");
  const [couponCode, setCouponCode] = useLocalStorage("couponCode", "");

  return (
    <MainCard title="Set up your campaign" customClass="mt-4">
      <div className="flex flex-col gap-6 whitespace-pre-wrap p-6.5 pt-4">
        <ValidatedInput
          label={`Name Your Campaign`}
          placeholder="Review-All Customers-30% OFF"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)} // Save to localStorage on change
        />
        <ValidatedInput
          label="Set Coupon Code (Sent After Content is Uploaded)"
          placeholder="MY-COUPON-30"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)} // Save to localStorage on change
        />
      </div>
    </MainCard>
  );
};

export default CampaignDetails;
