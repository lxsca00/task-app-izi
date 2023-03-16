import { Outlet, Route, Routes } from "react-router-dom"
import { PageHeader } from "../../partials/content/page-header/PageHeader"
import { TasksBusiness } from "./business/TasksBusiness"
import { TasksGGEE } from "./ggee/TasksGGEE"

const TasksPage= () => (
    <Routes>
        <Route element={
            <>
                <PageHeader/>
                <Outlet/>
            </>
        }>
            <Route path="business" element={<TasksBusiness/>}/>
            <Route path="ggee" element={<TasksGGEE/>}/>
        </Route>
    </Routes>
)
export {TasksPage}