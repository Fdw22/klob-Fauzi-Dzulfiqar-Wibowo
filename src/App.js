import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./views/Home";
import Nav from "./components/Nav";

function NoMatch() {
  return <h2>Ooops!</h2>;
}

export const JobContext = React.createContext();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="bg-slate-300 h-auto pb-5">
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/people" element={<People />} /> */}
              {/* <Route path="/starship" element={<Starship />} />
              <Route path="/planet" element={<Planet />} /> */}
              <Route path="400" element={<NoMatch />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
