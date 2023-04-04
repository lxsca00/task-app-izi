import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
//import {App} from './App';
import { AppRoutes } from "./routing/AppRoutes";

import "./assets/sass/style.scss";
import "./assets/sass/plugins.scss";
import ".//assets/sass/style.react.scss";
import { AuthProvider } from "./modules/auth/core/Auth";
import { setupAxios } from "./modules/auth/core/AuthHelpers";

setupAxios(axios);

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
