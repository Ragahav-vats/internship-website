import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import './assets/Css/style.css';
import Login from "./Components/Login";
import Internship from "./Components/Internship";
import InternshipProgram from "./subComponents/InternshipProgram";
import SummerInternship from "./subComponents/SummerInternship";
import Courses from "./Components/Courses";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import MasterClasses from "./Components/MasterClasses";
import Programs from "./Components/Programs";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/internship" element={<Internship/>} />
      <Route path="/program" element={<InternshipProgram/>} />
      <Route path="/Summer Internship program" element={<SummerInternship/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/about-us" element={<About/>} />
      <Route path="/contact-us" element={<Contact/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/masterclasses" element={<MasterClasses/>} />
      <Route path="/schooling-programs" element={<Programs/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

