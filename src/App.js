import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import CoinPage from "./Routes/CoinPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/CoinPage/:id" exact element={<CoinPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
