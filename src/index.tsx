import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
const el = document.getElementById("root")!;
ReactDOM.createRoot(el).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
