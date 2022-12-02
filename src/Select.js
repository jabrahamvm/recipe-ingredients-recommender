
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Tomato", value: "tomato" },
  { label: "Lettuce", value: "lettuce" },
  { label: "Cucumber", value: "cucumber"},
  { label: "Cheese", value: "cheese"},
  { label: "Apple", value: "apple"},
];

const Example = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1>Select Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Choose your ingredients"
      />
    </div>
  );
};

export default Example;