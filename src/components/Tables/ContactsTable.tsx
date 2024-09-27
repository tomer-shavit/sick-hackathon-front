"use client";
import { useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage"; // Ensure the correct path to the hook
import contacts from "../../constants/contacts"; // Ensure correct path to data
import ContactRow from "./ContactRow"; // Adjust the path as necessary
import UpFade from "../Animations/UpFade";

interface ContactsTableProps {
  selectable?: boolean; // Add selectable prop
}

const ContactsTable: React.FC<ContactsTableProps> = ({
  selectable = false,
}) => {
  // Use localStorage to persist the selected contact IDs
  const [selectedContacts, setSelectedContacts] = useLocalStorage<number[]>(
    "selectedContacts",
    [],
  );

  const handleCheckboxChange = (contactId: number) => {
    setSelectedContacts((prevSelected) =>
      prevSelected.includes(contactId)
        ? prevSelected.filter((id) => id !== contactId)
        : [...prevSelected, contactId],
    );
  };

  const toggleSelectAll = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([]); // Deselect all
    } else {
      setSelectedContacts(contacts.map((contact) => contact.contact_id)); // Select all
    }
  };

  // Clear selectedContacts when selectable is false
  useEffect(() => {
    if (!selectable) {
      setSelectedContacts([]);
    }
  }, [selectable, setSelectedContacts]);

  return (
    <div className="hide-scrollbar overflow-auto rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="min-w-[900px]">
        <div
          className={`grid ${selectable ? "grid-cols-[40px_1fr_1.5fr_2fr]" : "grid-cols-[1fr_1.5fr_2fr]"}`}
        >
          {/* Conditionally render the select-all checkbox if selectable */}
          {selectable && (
            <div className="px-3.5 pb-3.5">
              <input
                type="checkbox"
                checked={selectedContacts.length === contacts.length}
                onChange={toggleSelectAll}
              />
            </div>
          )}
          <div className="px-2 pb-3.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="px-2 pb-3.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Email
            </h5>
          </div>
          <div className="px-2 pb-3.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Description
            </h5>
          </div>
        </div>
        {contacts.map((contact, index) => (
          <UpFade key={index} delay={0.02 * index}>
            <ContactRow
              key={contact.contact_id}
              contact={contact}
              isSelected={selectedContacts.includes(contact.contact_id)}
              handleCheckboxChange={handleCheckboxChange}
              selectable={selectable} // Pass selectable prop to ContactRow
            />
          </UpFade>
        ))}
      </div>
    </div>
  );
};

export default ContactsTable;
