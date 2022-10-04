import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/Contact";
import Nomach from "../pages/nomach";
import TodoContainer from "./TodoContainer";
const App = () => (
  <>
    {/* <SideBar/> */}
    <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="About" element={<About />}>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
      <Route path="*" element={<Nomach />} />
    </Routes>
  </>
);

export default App;
