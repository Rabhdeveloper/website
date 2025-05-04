// Main.js
import React, { useState } from 'react';
import Card from './Card';
import Content from './Content';
import Frontpage from './Frontpage';
import './Card.css';

const Main = () => {
  // Initialize state with one card
  const [cards, setCards] = useState([1]);

  // Function to remove a card by index
  const removeCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  // Function to add a new card
  const addCard = () => {
    setCards([...cards, cards.length + 1]); // Add a new card with a unique identifier
  };

  return (
    <div>
      <Frontpage />
      <div className="cardComp">
        {cards.map((card, index) => (
          <Card key={card} index={index} onRemove={removeCard} />
        ))}
      </div>
      <button onClick={addCard} className="add-card-button">Add Card</button> {/* Button to add a new card */}
      <Content />
      
    </div>
  );
};

export default Main;