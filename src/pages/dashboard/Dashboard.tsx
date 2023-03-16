import { FC } from "react";
import { useIntl } from "react-intl";
import { Outlet, Route, Routes } from "react-router-dom";
import { PageHeader } from "../../partials/content/page-header/PageHeader";
import { PageTitle } from "../../partials/layout/core/PageData";
import { DashboardBusiness } from "./business/DashboardBusiness";
import { DashboardGGEE } from "./ggee/DashboardGGEE";

const DashboardPage: FC = () => <></>;

const DashboardWrapper: FC = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.DASHBOARD" })}
      </PageTitle>
      <DashboardPage />
    </>
  );
};

const DashboardPage2 = () => (
  <Routes>
    <Route
      element={
        <>
          <PageHeader />
          <Outlet />
        </>
      }
    >
      <Route path="business" element={<DashboardBusiness/>}/>
      <Route path="ggee" element={<DashboardGGEE/>}/>
    </Route>
  </Routes>
);

export { DashboardWrapper, DashboardPage2 };
