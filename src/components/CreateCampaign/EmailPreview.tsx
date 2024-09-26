import React from "react";
import MainCard from "../common/Cards/MainCard";
import ValidatedInput from "../common/Input/ValidatedInput";
import ValidatedTextarea from "../common/Input/ValidatedTextarea";
import useLocalStorage from "@/hooks/useLocalStorage"; // Ensure the correct path to the hook

const EmailPreview: React.FC = () => {
  // Use local storage to persist the email subject and body
  const [subject, setSubject] = useLocalStorage("subject", "Meeting Update");
  const [body, setBody] = useLocalStorage("body", "Body");

  return (
    <MainCard title="Email Preview" customClass="mt-4">
      <div className="p-4 px-6.5">
        <div className="mb-4">
          <ValidatedInput
            label="Subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)} // Save to localStorage on change
          />
        </div>
        <div className="mb-4">
          <ValidatedTextarea
            label="Body"
            rows={6}
            placeholder="Body"
            value={body}
            onChange={(value) => setBody(value)} // Save to localStorage on change
          />
        </div>
      </div>
    </MainCard>
  );
};

export default EmailPreview;
