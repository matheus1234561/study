import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Home } from "./features/home/pages/home";
import { BrowserRouter as Routes } from "react-router-dom";
import { Pages } from "./shared/components/router/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routes>
      <Pages />
    </Routes>
  </React.StrictMode>
);

reportWebVitals();
