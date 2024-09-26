import useLocalStorage from "@/hooks/useLocalStorage";
import MainCard from "../common/Cards/MainCard";
import ValidatedInput from "../common/Input/ValidatedInput";
import ValidatedTextarea from "../common/Input/ValidatedTextarea";
import TemplateDetails from "./TemplateDetails";

const bodyPlaceholder = `We'd love to hear from you!\nShare a quick video of your experience with [Product/Service] and get a special discount on your next purchase.\nJust record your video, click the link below, and enjoy the reward. It's that simple!\n
[Click here to upload your video]\n\nThank you for being part of the [Brand Name] family!`;

const CreateTemplate: React.FC = () => {
  // Use local storage to persist values
  const [subject, setSubject] = useLocalStorage(
    "subject",
    "Share a quick video and enjoy a discount on us!",
  );
  const [body, setBody] = useLocalStorage("body", bodyPlaceholder);

  return (
    <>
      <TemplateDetails />
      <MainCard title="Create a Template" customClass="mt-4">
        <div className="flex flex-col gap-6 p-6.5 pt-4">
          <ValidatedInput
            label="Subject Line"
            placeholder="Share a quick video and enjoy a discount on us!"
            value={subject}
            onChange={(e) => setSubject(e.target.value)} // Save to localStorage on change
          />
          <ValidatedTextarea
            label="Body"
            rows={8}
            value={body}
            placeholder={bodyPlaceholder}
            onChange={(value) => setBody(value)} // Save to localStorage on change
          />
        </div>
      </MainCard>
    </>
  );
};

export default CreateTemplate;
