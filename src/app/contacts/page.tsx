import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ContactsTable from "@/components/Tables/ContactsTable";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "FelixFarm | Use Every Drop",
  description: "Collect & manage user generated content with ease",
};

const ContactsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Contacts" />
      <ContactsTable />
    </DefaultLayout>
  );
};

export default ContactsPage;
