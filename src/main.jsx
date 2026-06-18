import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import './assets/Css/style.css';
import Login from "./Components/Login";
import Internship from "./Components/Internship";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/internship" element={<Internship/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

