import React from "react";
import "./App.css";
import { Random } from "./components/Random_V2";
import { Tag } from "./components/Tag_V2";

export const App = () => {
  return (
    <div className="App">
      <h1>Random GIF application</h1>
      <div className="main-container">
        <Random />
        <Tag />
      </div>
    </div>
  );
};
