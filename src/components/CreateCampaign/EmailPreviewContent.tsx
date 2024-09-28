import { hasPlaceholders, highlightEditableText } from "@/utils/textUtils";

interface EmailPreviewContentProps {
  subject: string;
  body: string;
}

const EmailPreviewContent: React.FC<EmailPreviewContentProps> = ({
  subject,
  body,
}) => {
  return (
    <>
      <div className="email-preview text-dark-2 dark:text-white">
        <p>
          <strong>From:</strong> support@brandname.com
        </p>
        <p>
          <strong>To:</strong> customer@example.com
        </p>
        <p>
          <strong>Subject:</strong> {subject}
        </p>
        <div className="mt-4 whitespace-pre-wrap">
          {highlightEditableText(body)}
        </div>
      </div>
      {hasPlaceholders(body) && ( // Show the warning message only if placeholders exist
        <div className="mt-4 text-sm text-red-400">
          <strong>Note:</strong> Please replace the highlighted text before
          sending the email.
        </div>
      )}
    </>
  );
};

export default EmailPreviewContent;
