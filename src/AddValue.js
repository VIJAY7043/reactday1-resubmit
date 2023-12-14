import React, { useState } from "react";

const AddValue = ({ onUpdateSavings }) => {
  const [newValue, setNewValue] = useState(0);

  const handleAddValue = () => {
    onUpdateSavings(newValue);
    setNewValue(0);
  };

  return (
    <div className="add-value">
      <h2>Add Value</h2>
      <input
        type="number"
        value={newValue}
        onChange={(e) => setNewValue(Number(e.target.value))}
      />
      <button onClick={handleAddValue}>Add</button>
    </div>
  );
};

export default AddValue;