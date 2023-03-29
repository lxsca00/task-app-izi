import { FC } from "react";
import { PageHeader } from "../../partials/components/page-header/PageHeader";
import { Table } from "../../partials/components/tables/Table";
import { UsersTableHead } from "../../partials/components/tables/table-head/UsersTableHead";


const UserManagement: FC = () => (
  <>
    <PageHeader />
    <p>UserManagement component works!</p>
    <Table name="Users" className="mb-5 mb-xl-8">
      <UsersTableHead/>
      <tbody>
        
      </tbody>
    </Table>
  </>
);

export { UserManagement };
