import { useState } from "react";
import ChildComponent from "./component/ChildComponent.jsx";

const App = () => {
  const [value, setValue] = useState("Initial Value");

  // Function to handle button click
  const handleButtonClick = () => {
    setValue("Value Updated by Button Click");
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Current Value: {value}</p>
      <button onClick={handleButtonClick}>Update Value</button>
      <ChildComponent updateValue={setValue} />
    </div>
  );
};

export default App;
