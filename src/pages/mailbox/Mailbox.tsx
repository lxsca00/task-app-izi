import { PageHeader } from "../../partials/components/page-header/PageHeader";
import { TableMailbox } from "../../partials/components/tables/TableMailbox";

const Mailbox = (): JSX.Element => (
  <>
    <PageHeader />
    <p>Mailbox component!</p>
    <TableMailbox className='mb-5 mb-xl-8'/>
  </>
);

export { Mailbox };
