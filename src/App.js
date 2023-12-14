import React, { useState } from "react";
import Dashboard from "./Dashboard";
import AddValue from "./AddValue";
import "./App.css";

const App = () => {
  const [monthlySavings, setMonthlySavings] = useState(0);

  const updateSavings = (newValue) => {
    setMonthlySavings(monthlySavings + newValue);
  };

  return (
    <div className="App">
      <Dashboard monthlySavings={monthlySavings} />
      <AddValue onUpdateSavings={updateSavings} />
    </div>
  );
};

export default App;
