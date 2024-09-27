import useLocalStorage from "@/hooks/useLocalStorage";
import contacts from "@/constants/contacts";
import ContactsPreview from "./ContactsPreview";
import EmailPreview from "./EmailPreview";
import CampaignDetails from "./CampaignDetails";
import UpFade from "../Animations/UpFade";

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
        <CampaignDetails />
      </UpFade>

      <UpFade delay={0.05}>
        <ContactsPreview selectedContacts={selectedContacts} />
      </UpFade>

      <UpFade delay={0.1}>
        <EmailPreview />
      </UpFade>
    </>
  );
};

export default LaunchCampaign;
