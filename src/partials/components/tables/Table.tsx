import React from "react";
import { KTSVG } from "../../../helpers/KTSVG";
import { ITicket } from "../core/TableModels";
import { TaskTableHead } from "./table-head/TasksTableHead";
import { TableRow } from "./TableRow";

type Props = {
  className: string;
};

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

const Table: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      {/* start: Table header*/}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          {/* CHANGE */}
          <span className="card-label fw-bold fs-3 mb-1">Masivo</span>
        </h3>

        {/* Table menu */}
        <div className="card-toolbar">
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <KTSVG
              path="/media/icons/duotune/general/gen024.svg"
              className="svg-icon-2"
            />
          </button>
          <div
            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px"
            data-kt-menu="true"
          >
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                Nueva tarea
              </div>
            </div>

            <div className="separator mb-3 opacity-75"></div>
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <a href="/" className="menu-link px-3">
                Carga unitaria
              </a>
            </div>
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <a href="/" className="menu-link px-3">
                Carga masiva
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* end: Table header */}
      {/* start: Table body*/}
      <div className="card-body py-3">
        <div className="table-responsive">
          <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
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
          </table>
        </div>
      </div>
      {/* end: Table body*/}
    </div>
  );
};

export { Table };
