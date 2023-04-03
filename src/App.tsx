import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AuthInit } from "./modules/auth/core/Auth";
import { LayoutProvider } from "./partials/layout/core/LayoutProvider";
import { MasterInit } from "./partials/layout/MasterInit";

const App = () => {
  return (
    <Suspense>
      <LayoutProvider>
        <AuthInit>
          <Outlet />
          <MasterInit />
        </AuthInit>
      </LayoutProvider>
    </Suspense>
  );
};

export { App };
