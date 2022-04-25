import React from "react";
import Collections from "./Pages/Gallery/Gallery";
import Header from "./Components/Header/Header";
import "./App.css"

const App = () => {
    return (
      <div>
        <Header />
        <Collections />
      </div>
    );
}

export default App;