import { useState } from "react";

const Card = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCardColor = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="card-container">
      {[1, 2, 3, 4, 5, 6].map((id) => (
        <div
          className={`card ${activeCard === id ? "active" : ""}`}
          key={id}
          onClick={() => toggleCardColor(id)}
        >
          <div className="card-body">
            <h5 className="card-title">Card {id}</h5>
            <p className="card-text">This is card number {id}.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
