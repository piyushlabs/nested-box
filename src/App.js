import logo from "./logo.svg";
import "./App.css";
import ParentWrapper from "./ParentWrapper";

import React, { useState } from "react";

function App() {
  let [size, setSize] = useState([400, 50]);
  let onChange = (e) => {
    let newSize = e.target.value.split(",");
    newSize[0] = +newSize[0];
    newSize[1] = +newSize[1];
    setSize(newSize);
  };
  return (
    <>
      Size:{" "}
      <select onChange={(e) => onChange(e)}>
        <option value={[400, 50]}>Max Size: 400 and Step: 50</option>
        <option value={[600, 30]}>Max Size: 100 and Step: 30</option>
        <option value={[800, 40]}>Max Size: 800 and Step: 40</option>
        <option value={[500, 50]}>Max Size: 500 and Step: 50</option>
      </select>
      <ParentWrapper maxSize={size[0]} step={size[1]} />;
    </>
  );
}

export default App;
