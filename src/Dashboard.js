import React, { useState } from "react";

const Dashboard = () => {
  const [monthlySavings, setMonthlySavings] = useState(0);

  return (
    <div className="dashboard">
      <h2>Monthly Savings</h2>
      <p>${monthlySavings}</p>
    </div>
  );
};

export default Dashboard;