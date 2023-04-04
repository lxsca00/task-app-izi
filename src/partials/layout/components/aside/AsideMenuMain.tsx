/* eslint-disable react/jsx-no-target-blank */
import React from "react";
//import {useIntl} from 'react-intl'
import { AsideMenuItemWithSub } from "./AsideMenuWithSub";
import { AsideMenuItem } from "./AsideMenuItem";

export function AsideMenuMain() {
  //const intl = useIntl()

  return (
    <>
      <AsideMenuItemWithSub
        to="/tasks"
        icon="/media/icons/duotune/art/art002.svg"
        title="Tickets"
        fontIcon="bi-app-indicator"
      >
        <AsideMenuItem to="/tasks/business" title="Negocio" hasBullet={true} />
        <AsideMenuItem to="/tasks/ggee" title="GGEE" hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItem
        to="/mailbox"
        icon="/media/icons/duotune/general/gen019.svg"
        title="Buzón"
        fontIcon="bi-layers"
      />
      <AsideMenuItemWithSub
        to="/dashboard"
        title="Reportes"
        fontIcon="bi-archive"
        icon="/media/icons/duotune/general/gen022.svg"
      >
        <AsideMenuItem
          to="/dashboard/business"
          title="Negocio"
          hasBullet={true}
        />
        <AsideMenuItem to="/dashboard/ggee" title="GGEE" hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItem
        to="/users"
        icon="/media/icons/duotune/general/gen051.svg"
        title="User management"
        fontIcon="bi-layers"
      />
    </>
  );
}
