import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import {App} from "../App";

import { Test } from "../Test";
import { NestedTest } from "../Test2";

const { PUBLIC_URL } = process.env;

const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
        <Routes>
            <Route path="test" element={<Test/>}>
                <Route path="again" element={<NestedTest/>}/>
            </Route>
        </Routes>

    </BrowserRouter>
  );
};

export { AppRoutes };
