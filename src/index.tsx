import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard/dashboard_page";
import reportWebVitals from "./reportWebVitals";
import "./styles.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="" element={<App />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
