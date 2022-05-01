import React from "react";
import Collections from "./Pages/Gallery/Gallery";
import Header from "./Components/Header/Header";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutMe/AboutMe";
import AboutApp from "./Pages/AboutApp/AboutApp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/Me" element={<AboutMe />} />
          <Route path="/about" element={<AboutApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;