import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { App } from "../App";
import { AuthPage } from "../modules/auth/AuthPage";
import { Logout } from "../modules/auth/Logout";
import { ErrorsPage } from "../modules/errors/ErrorsPage";
import { DashboardWrapper } from "../pages/dashboard/Dashboard";
import { Mailbox } from "../pages/mailbox/Mailbox";
import { Tasks } from "../pages/tasks/Task";
import { UserManagement } from "../pages/user-management/UserManagement";
import { MasterLayout } from "../partials/layout/MasterLayout";


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
          <Route path="master" element={<MasterLayout/>}/>
          <Route path="dashboard" element={<DashboardWrapper/>}/>
          <Route path="mailbox" element={<Mailbox/>}/>
          <Route path="tasks" element={<Tasks/>}/>
          <Route path="user-management" element={<UserManagement/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
