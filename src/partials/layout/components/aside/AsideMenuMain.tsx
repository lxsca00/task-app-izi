/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
//import {useIntl} from 'react-intl'
import { AsideMenuItemWithSub } from './AsideMenuWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  //const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title='Dashboard'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItemWithSub
      to='/tickets'
      icon='/media/icons/duotune/art/art002.svg'
      title='Tickets'
      fontIcon='bi-app-indicator'>
        <AsideMenuItem to='/tickets/negocio' title='Negocio' hasBullet={true} />
        <AsideMenuItem to='/tickets/ggee' title='GGEE' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItem
        to='/buzon'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Buzón'
        fontIcon='bi-layers'
      />
      <AsideMenuItemWithSub
        to='/reportes'
        title='Reportes'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItem to='/reportes/negocio' title='Negocio' hasBullet={true} />
        <AsideMenuItem to='/reportes/ggee' title='GGEE' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItem
        to='/apps/user-management/users'
        icon='/media/icons/duotune/general/gen051.svg'
        title='User management'
        fontIcon='bi-layers'
      />
    </>
  )
}
