"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import MainCard from "../common/Cards/MainCard";
import ValidatedInput from "../common/Input/ValidatedInput";
import ValidatedTextarea from "../common/Input/ValidatedTextarea";
import UpFade from "../Animations/UpFade";
import Button from "../Buttons/Button";
import PopUpCard from "../common/Cards/PopUpCard";
import { useState } from "react";
import AlertInfo from "../Alerts/AlertSuccess";
import EmailPreviewContent from "./EmailPreviewContent";

const bodyPlaceholder = `We'd love to hear from you!\nShare a quick video of your experience with [Product/Service] and get a special discount on your next purchase.\nJust record your video, click the link below, and enjoy the reward. It's that simple!\n
{Click here to upload your video}\n\nThank you for being part of the [Brand Name] family!`;

const CreateTemplate: React.FC = () => {
  const [subject, setSubject] = useLocalStorage(
    "subject",
    "Share a quick video and enjoy a discount on us!",
  );
  const [body, setBody] = useLocalStorage("body", bodyPlaceholder);
  const [showPopup, setShowPopup] = useState(false); // Manage popup state for email preview

  return (
    <>
      {showPopup && (
        <PopUpCard onClose={() => setShowPopup(false)}>
          <EmailPreviewContent
            subject={subject}
            body={body}
          ></EmailPreviewContent>
        </PopUpCard>
      )}
      <UpFade>
        <AlertInfo
          title="What is a Template?"
          body="It is the Email your customers get, saved as a template for later."
        ></AlertInfo>
      </UpFade>

      <UpFade delay={0.1}>
        <MainCard title="Create Your Email" customClass="mt-4">
          <div className="flex flex-col gap-6 p-6.5 pt-4">
            <ValidatedInput
              label="Subject Line"
              placeholder="Share a quick video and enjoy a discount on us!"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <ValidatedTextarea
              label="Body"
              rows={8}
              value={body}
              placeholder={bodyPlaceholder}
              onChange={(value) => setBody(value)}
            />
            <div className="flex justify-end">
              <Button
                label="Preview Email"
                onClick={() => setShowPopup(true)} // Show popup when button is clicked
                customClasses="px-2 pt-2 pb-2"
              />
            </div>
          </div>
        </MainCard>
      </UpFade>
    </>
  );
};

export default CreateTemplate;
