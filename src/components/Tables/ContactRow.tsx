import Image from "next/image";

interface ContactRowProps {
  contact: {
    contact_id: number;
    name: string;
    email: string;
    description: string;
    image?: string;
  };
  isSelected: boolean;
  handleCheckboxChange: (contactId: number) => void;
}

const ContactRow: React.FC<ContactRowProps> = ({
  contact,
  isSelected,
  handleCheckboxChange,
}) => {
  return (
    <div
      className={`grid grid-cols-[40px_1fr_1.5fr_2fr] items-center ${
        isSelected ? "bg-purple-100 dark:bg-purple-900" : ""
      } border-b border-stroke dark:border-dark-3`}
    >
      <div className="flex items-center justify-center p-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => handleCheckboxChange(contact.contact_id)}
        />
      </div>
      <div className="flex items-center gap-1.5 px-2 py-4">
        <div className="flex-shrink-0">
          <Image
            src={contact.image || "/images/avatar-placeholder.png"}
            alt={contact.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <p className="font-medium text-dark dark:text-white">{contact.name}</p>
      </div>
      <div className="px-2 py-4">
        <p className="text-dark dark:text-white">{contact.email}</p>
      </div>
      <div className="px-2 py-4">
        <p className="text-dark dark:text-white">{contact.description}</p>
      </div>
    </div>
  );
};

export default ContactRow;
