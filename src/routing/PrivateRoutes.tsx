import { Route, Routes } from "react-router-dom";
import { Profile } from "../modules/profile/Profile";
import { DashboardPage2, DashboardWrapper } from "../pages/dashboard/Dashboard";
import { Mailbox } from "../pages/mailbox/Mailbox";
import { TasksPage } from "../pages/tasks/TaskPage";
import { UserManagement } from "../pages/user-management/UserManagement";
import { MasterLayout } from "../partials/layout/MasterLayout";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/*Pages*/}
        {/*CHECK: DashboardWrapper*/}
        <Route path="dashboard/*" element={<DashboardPage2 />} />
        <Route path="mailbox" element={<Mailbox />} />
        <Route path="tasks/*" element={<TasksPage />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path='profile' element={<Profile/>}/>
        {/*Temporal index route*/}
        <Route index element={<TasksPage/>}/>
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };
