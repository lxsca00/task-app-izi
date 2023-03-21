import { Outlet, Route, Routes } from "react-router-dom";
import { Filter } from "../../partials/components/filter/Filter";
import { PageHeader } from "../../partials/components/page-header/PageHeader";
import { SearchBar } from "../../partials/components/search/SearchBar";
import { TasksBusiness } from "./business/TasksBusiness";
import { TasksGGEE } from "./ggee/TasksGGEE";

const TasksPage = () => (
  <Routes>
    <Route
      element={
        <>
          <PageHeader />
          <SearchBar/>
          <Filter/>
          <Outlet />
        </>
      }
    >
      <Route path="business" element={<TasksBusiness />} />
      <Route path="ggee" element={<TasksGGEE />} />
      <Route index element={<TasksBusiness />} />
    </Route>
  </Routes>
);
export { TasksPage };
