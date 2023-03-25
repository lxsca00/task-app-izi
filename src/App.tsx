import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LayoutProvider } from "./partials/layout/core/LayoutProvider";
import { MasterInit } from "./partials/layout/MasterInit";

const App = () => {
  return (
    <Suspense>
      <LayoutProvider>
        {/*start: Auth Init*/}
        <Outlet />
        <MasterInit />
      </LayoutProvider>

      {/*end: Auth Init*/}
    </Suspense>
  );
};

export { App };
