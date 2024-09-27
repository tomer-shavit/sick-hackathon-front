import React from "react";
import MainCard from "../common/Cards/MainCard";
import ValidatedInput from "../common/Input/ValidatedInput";
import useLocalStorage from "@/hooks/useLocalStorage";

const TemplateDetails: React.FC = () => {
  const [templateName, setTemplateName] = useLocalStorage("templateName", "");

  return (
    <MainCard title="Name your template" customClass="mt-4">
      <div className="flex flex-col gap-6 p-6.5 pt-4">
        <ValidatedInput
          label="Template Name"
          placeholder="Video Review Template"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)} // Save to localStorage on change
        />
      </div>
    </MainCard>
  );
};

export default TemplateDetails;
