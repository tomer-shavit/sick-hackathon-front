import MainCard from "../common/Cards/MainCard";
import ContactsTable from "../Tables/ContactsTable";

const SelectContacts: React.FC = () => {
  return (
    <MainCard title="Select Contacts For The Campagin" customClass="mt-4">
      <ContactsTable></ContactsTable>
    </MainCard>
  );
};

export default SelectContacts;
