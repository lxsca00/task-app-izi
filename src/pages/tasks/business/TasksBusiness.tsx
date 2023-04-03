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

const TasksBusiness = (): JSX.Element => (
  <>
    <button type="submit" onClick={() => console.log("Excel to JSON button")}>
      Excel a JSON
    </button>
    {/*<Table name="Masivo" className="mb-5 mb-xl-8">
      <TaskTableHead />
      <tbody>
        {tickets.map(
          ({
            code,
            ruc,
            activities,
            enterDate,
            modifyDate,
            intState,
            lifecycle,
            state,
            owner,
          }) => (
            <TableRow
              code={code}
              ruc={ruc}
              activities={activities}
              enterDate={enterDate}
              modifyDate={modifyDate}
              intState={intState}
              lifecycle={lifecycle}
              state={state}
              owner={owner}
            />
          )
        )}
      </tbody>
    </Table> */}
  </>
);

export { TasksBusiness };
