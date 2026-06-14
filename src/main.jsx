import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout/>}>
      <Route path="/" element={<Home/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

