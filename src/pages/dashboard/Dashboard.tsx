import {FC} from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../partials/layout/core/PageData'

const DashboardPage: FC = () => (
    <>
    </>
  )
  
  const DashboardWrapper: FC = () => {
    const intl = useIntl()
    return (
      <> 
        <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
        <DashboardPage />
      </>
    )
  }
  
  export {DashboardWrapper};