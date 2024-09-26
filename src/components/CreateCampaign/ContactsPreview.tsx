import React, { useState } from "react";
import MainCard from "../common/Cards/MainCard";
import ValidatedInput from "../common/Input/ValidatedInput";

interface Contact {
  contact_id: number;
  name: string;
  email: string;
}

interface ContactsPreviewProps {
  selectedContacts: Contact[]; // Assuming only selected contacts are passed
}

const ContactsPreview: React.FC<ContactsPreviewProps> = ({
  selectedContacts,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter contacts based on search term (name or email)
  const filteredContacts = selectedContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <MainCard title="Contacts Preview" customClass="mt-4">
      <div className="p-4 px-6.5">
        <div className="mb-4">
          <p className="text-sm font-medium text-dark dark:text-white">
            {selectedContacts.length} contact(s) assigned to this campaign
          </p>
        </div>
        <div className="mb-4">
          <ValidatedInput
            label="Search Contact"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name or email"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filteredContacts.map((contact) => (
            <span
              key={contact.contact_id}
              className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300"
            >
              {contact.email}
            </span>
          ))}
          {filteredContacts.length === 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No contacts found.
            </p>
          )}
        </div>
      </div>
    </MainCard>
  );
};

export default ContactsPreview;
