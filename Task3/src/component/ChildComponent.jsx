const ChildComponent = ({ updateValue }) => {
  const handleChangeValue = () => {
    updateValue("Value Updated by Child Component");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleChangeValue}>Update Value from Child</button>
    </div>
  );
};

export default ChildComponent;
