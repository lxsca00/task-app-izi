import React from "react";
import { KTSVG } from "../../../helpers/KTSVG";

type Props = {
  code: number;
  ruc: number;
  activities: number;
  enterDate: string;
  modifyDate: string;
  intState: string;
  lifecycle: number;
  state: "open" | "closed";
  owner: string;
};

const TableRow = ({
  code,
  ruc,
  activities,
  enterDate,
  modifyDate,
  intState,
  lifecycle,
  state,
  owner,
}: Props) => {
  return (
    <tr>
      <td>
        <p className="text-dark fw-bold mb-1 fs-6">{code}</p>
      </td>
      <td>
        <p className="text-dark mb-1 fs-6 text-center">{ruc}</p>
      </td>
      <td>
        <p className="text-dark mb-1 fs-6 text-center">{activities}</p>
      </td>
      <td>
        <p className="text-dark mb-1 fs-6 text-center">{enterDate}</p>
      </td>
      <td className="text-dark mb-1 fs-6 text-center">{modifyDate}</td>
      <td className="text-dark mb-1 fs-6 text-center">
        <p>{intState}</p>
      </td>
      <td className="text-dark mb-1 fs-6 text-center">
        <p>{lifecycle}</p>
      </td>
      <td className="text-dark mb-1 fs-6 text-center">
        <p>{state}</p>
      </td>
      <td className="text-dark mb-1 fs-6 text-center">
        <p>{owner}</p>
      </td>
      <td className="text-end">
        <a
          href="/"
          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
        >
          <KTSVG
            path="/media/icons/duotune/general/gen019.svg"
            className="svg-icon-3"
          />
        </a>
        <a
          href="/"
          className="btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1"
        >
          <KTSVG
            path="/media/icons/duotune/art/art005.svg"
            className="svg-icon-3"
          />
        </a>
        <a
          href="/"
          className="btn btn-icon btn-bg-light btn-active-color-danger btn-sm"
        >
          <KTSVG
            path="/media/icons/duotune/general/gen027.svg"
            className="svg-icon-3"
          />
        </a>
      </td>
    </tr>
  );
};

export { TableRow };
