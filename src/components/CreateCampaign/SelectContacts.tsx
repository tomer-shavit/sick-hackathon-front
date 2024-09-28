import UpFade from "../Animations/UpFade";
import MainCard from "../common/Cards/MainCard";
import ContactsTable from "../Tables/ContactsTable";

const SelectContacts: React.FC = () => {
  return (
    <UpFade>
      <MainCard title="Choose Contacts to Email" customClass="mt-4">
        <ContactsTable selectable></ContactsTable>
      </MainCard>
    </UpFade>
  );
};

export default SelectContacts;
