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
        to="/app/tasks"
        icon="/media/icons/duotune/art/art002.svg"
        title="Tickets"
        fontIcon="bi-app-indicator"
      >
        <AsideMenuItem to="/app/tasks/business" title="Negocio" hasBullet={true} />
        <AsideMenuItem to="/app/tasks/ggee" title="GGEE" hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItem
        to="/app/mailbox"
        icon="/media/icons/duotune/general/gen019.svg"
        title="Buzón"
        fontIcon="bi-layers"
      />
      <AsideMenuItemWithSub
        to="/app/dashboard"
        title="Reportes"
        fontIcon="bi-archive"
        icon="/media/icons/duotune/general/gen022.svg"
      >
        <AsideMenuItem
          to="/app/dashboard/business"
          title="Negocio"
          hasBullet={true}
        />
        <AsideMenuItem to="/app/dashboard/ggee" title="GGEE" hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItem
        to="/app/user-management"
        icon="/media/icons/duotune/general/gen051.svg"
        title="User management"
        fontIcon="bi-layers"
      />
    </>
  );
}
