import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewCard from "./pages/ViewCard/viewCard";
import { Error } from "./pages/Error/error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/viewCard" element={<ViewCard />}>
        <Route path=":userName" element={<ViewCard />} />
      </Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
