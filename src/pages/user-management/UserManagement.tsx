import { FC } from "react";
import { PageHeader } from "../../partials/components/page-header/PageHeader";
import { TableUsers } from "../../partials/components/tables/TableUser";

const UserManagement: FC = () => (
  <>
    <PageHeader />
    <p>UserManagement component works!</p>
    <TableUsers className="mb-5 mb-xl-8" />
  </>
);

export { UserManagement };
