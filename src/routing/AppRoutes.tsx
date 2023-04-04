import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { App } from "../App";
import { AuthPage } from "../modules/auth/AuthPage";
import { useAuth } from "../modules/auth/core/Auth";
import { Logout } from "../modules/auth/Logout";
import { ErrorsPage } from "../modules/errors/ErrorsPage";
import { PrivateRoutes } from "./PrivateRoutes";

const { PUBLIC_URL } = process.env;

const AppRoutes = () => {
  const { currentUser } = useAuth();

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App/>}>
          <Route path="error/*" element={<ErrorsPage/>}/>
          <Route path="logout" element={<Logout/>}/>
          {currentUser ? (
            <>
            <Route path="/*" element={<PrivateRoutes/>}/>
            <Route index element={<Navigate to="/tasks"/>}/>
            </>
          ) : (
            <>
            <Route path="auth/*" element={<AuthPage/>}/>
            <Route path="*" element={<Navigate to="/auth"/>}/>
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
