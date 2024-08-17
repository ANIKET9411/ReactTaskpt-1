import { useState } from "react";

const Task = () => {
  const [salePrice, setSalePrice] = useState("");
  const [salePrices, setSalePrices] = useState([]);
  const [error, setError] = useState("");
  const originalPrice = 100;
  const MAX_PRICE = 300;

  const handleInputChange = (e) => {
    setSalePrice(e.target.value);
    setError(""); // Clear error message when input changes
  };

  const handleAddSalePrice = () => {
    const price = parseFloat(salePrice);

    if (isNaN(price)) {
      setError("Invalid input. Please enter a numeric value.");
      return;
    }

    if (price > MAX_PRICE) {
      setError(`Price cannot be more than ${MAX_PRICE}.`);
      return;
    }

    setSalePrices([...salePrices, price]);
    setSalePrice("");
    setError(""); // Clear error message on successful addition
  };

  const totalSalePrice = salePrices.reduce((acc, price) => acc + price, 0);
  const totalProfit = totalSalePrice - originalPrice * salePrices.length;

  return (
    <div className="sales-calculator">
      <h2>Task Three</h2>
      <p>
        Storing input textbox value into an array, displaying that array list,
        then calculating total sale price & total profit using JavaScript.
      </p>
      <p>Product Original Price: {originalPrice}</p>

      <div className="input-section">
        <label htmlFor="salePrice">Sale Price *</label>
        <input
          type="number"
          id="salePrice"
          value={salePrice}
          onChange={handleInputChange}
          placeholder="Enter sale price"
        />

        <br />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleAddSalePrice}>Submit</button>
      </div>

      <div className="output-section">
        <h3>Output Result:</h3>
        <p className="heading">Sold Price List:</p>
        <ul>
          {salePrices.map((price, index) => (
            <li key={index}>{price}</li>
          ))}
        </ul>
        <p className="heading">Total Sold Price: </p>
        {totalSalePrice}
        <p className="heading">Total Profit: </p>
        {totalProfit}
      </div>
    </div>
  );
};

export default Task;
