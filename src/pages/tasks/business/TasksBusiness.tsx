import { FC } from "react";
import { ITicket } from "../../../partials/components/core/TableModels";
import { Table } from "../../../partials/components/tables/Table";
import { TaskTableHead } from "../../../partials/components/tables/table-head/TasksTableHead";
import { TableRow } from "../../../partials/components/tables/TableRow";

const tickets: Array<ITicket> = [
  {
    code: 8966560,
    ruc: 10407729302,
    activities: 2,
    enterDate: "24/03/2023",
    modifyDate: "25/03/2023",
    intState: "Lista para iniciar",
    lifecycle: 4,
    state: "open",
    owner: "me",
  },
  {
    code: 5393938,
    ruc: 20609181894,
    activities: 4,
    enterDate: "20/03/2023",
    modifyDate: "23/03/2023",
    intState: "En desarrollo",
    lifecycle: 3,
    state: "open",
    owner: "not me",
  },
];

const TasksBusiness: FC = () => (
  <>
    <Table name="Masivo" className="mb-5 mb-xl-8">
      <TaskTableHead />
      <tbody>
        {tickets.map((ticket) => (
          <TableRow
            code={ticket.code}
            ruc={ticket.ruc}
            activities={ticket.activities}
            enterDate={ticket.enterDate}
            modifyDate={ticket.modifyDate}
            intState={ticket.intState}
            lifecycle={ticket.lifecycle}
            state={ticket.state}
            owner={ticket.owner}
          />
        ))}
      </tbody>
    </Table>
  </>
);

export { TasksBusiness };
