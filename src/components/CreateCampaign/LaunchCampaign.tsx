import useLocalStorage from "@/hooks/useLocalStorage";
import contacts from "@/constants/contacts";
import ContactsPreview from "./ContactsPreview";
import EmailPreview from "./EmailPreview";
import CampaignDetails from "./CampaignDetails";

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
      <CampaignDetails />
      <ContactsPreview selectedContacts={selectedContacts} />
      <EmailPreview />
    </>
  );
};

export default LaunchCampaign;
