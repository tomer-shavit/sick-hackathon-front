import React from "react";
import MainCard from "../common/Cards/MainCard";
import useLocalStorage from "@/hooks/useLocalStorage"; // Ensure the correct path to the hook
import EmailPreviewContent from "./EmailPreviewContent";
import ContactsPreview from "./ContactsPreview";
import SubCard from "../common/Cards/SubCard";
interface Contact {
  contact_id: number;
  name: string;
  email: string;
}

interface CampaignReviewProps {
  selectedContacts: Contact[];
}

const CampaignReview: React.FC<CampaignReviewProps> = ({
  selectedContacts,
}) => {
  const [subject, setSubject] = useLocalStorage("subject", "Meeting Update");
  const [body, setBody] = useLocalStorage("body", "Body");

  return (
    <MainCard title="Review Your Campaign" customClass="mt-4">
      <div className="p-6.5 pt-4">
        <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">
          Review Your Email
        </h3>
        <SubCard>
          <EmailPreviewContent
            subject={subject}
            body={body}
          ></EmailPreviewContent>
        </SubCard>
        <h3 className="mb-2 font-semibold text-dark dark:text-white">
          Review Contacts
        </h3>
        <SubCard>
          <ContactsPreview
            selectedContacts={selectedContacts}
          ></ContactsPreview>
        </SubCard>
      </div>
    </MainCard>
  );
};

export default CampaignReview;
