import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ContactsTable from "@/components/Tables/ContactsTable";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <ContactsTable />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
