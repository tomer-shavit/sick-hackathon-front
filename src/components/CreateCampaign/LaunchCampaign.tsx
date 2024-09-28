import useLocalStorage from "@/hooks/useLocalStorage";
import contacts from "@/constants/contacts";
import CampaignReview from "./CampaignReview";
import CampaignDetails from "./CampaignDetails";
import UpFade from "../Animations/UpFade";
import AlertInfo from "../Alerts/AlertSuccess";

const LaunchCampaign: React.FC = () => {
  const [selectedContactIds] = useLocalStorage<number[]>(
    "selectedContacts",
    [],
  );

  const selectedContacts = contacts.filter((contact) =>
    selectedContactIds.includes(contact.contact_id),
  );

  return (
    <>
      <UpFade>
        <AlertInfo
          title="What is a Campagin?"
          body="It is a combination of an Email, Contacts, and a Coupon code."
        ></AlertInfo>
      </UpFade>
      <UpFade>
        <CampaignDetails />
      </UpFade>

      <UpFade delay={0.05}>
        <CampaignReview selectedContacts={selectedContacts} />
      </UpFade>
    </>
  );
};

export default LaunchCampaign;
