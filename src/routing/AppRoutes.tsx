import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { App } from "../App";
import { AuthPage } from "../modules/auth/AuthPage";
import { Logout } from "../modules/auth/Logout";
import { ErrorsPage } from "../modules/errors/ErrorsPage";
import { PrivateRoutes } from "./PrivateRoutes";


const { PUBLIC_URL } = process.env;

const AppRoutes = () => {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="error/*" element={<ErrorsPage />} />
          <Route path="logout" element={<Logout />} />
          {/*TODO: currentUser validation*/}
          <Route path="auth/*" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/auth" />} />
          
          {/*TODO: Private routes*/}
          <Route path="app/*" element={<PrivateRoutes/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
