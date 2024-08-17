import React, { useState } from "react";

const Task = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState({ nameError: "", priceError: "" });

  const handleAddProduct = () => {
    let nameError = "";
    let priceError = "";

    if (!productName.trim()) {
      nameError = "Product Name is required.";
    }

    if (!productPrice.trim() || isNaN(productPrice)) {
      priceError = "Please enter a valid price.";
    }

    if (parseFloat(productPrice) <= 0) {
      priceError = "Please enter a price greater than 0.";
    }

    if (nameError || priceError) {
      setErrors({ nameError, priceError });
      return;
    }

    // Add the product to the list and reset the input fields
    setProducts([
      ...products,
      { name: productName, price: parseFloat(productPrice) },
    ]);
    setProductName("");
    setProductPrice("");
    setErrors({ nameError: "", priceError: "" });
  };

  const totalProductPrice = products.reduce(
    (acc, product) => acc + product.price,
    0
  );

  return (
    <div className="task">
      <h2>Task Four</h2>
      <p>
        Storing the input data with Product Name and Product Price as an object
        into array, displaying that list data, calculating total Product Price
        using JavaScript.
      </p>

      <div className="input-section">
        <label htmlFor="productName">Product Name *</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product name"
        />
        {errors.nameError && (
          <p className="error-message">{errors.nameError}</p>
        )}

        <label htmlFor="productPrice">Product Price *</label>
        <input
          type="text"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          placeholder="Enter product price"
        />
        {errors.priceError && (
          <p className="error-message">{errors.priceError}</p>
        )}
        <br />
        <button onClick={handleAddProduct}>Submit</button>
      </div>

      <div className="output-section">
        <h3>Output Result:</h3>
        <p className="heading">Sale Price</p>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
        <p className="heading">Total Price </p>
        {totalProductPrice}
      </div>
    </div>
  );
};

export default Task;
