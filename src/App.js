import React from "react";
import "./css/reset.css";
import "./css/main.css";

import Header from "./components/Header.js";
import Card from "./components/Card.js";

import cardInfo from "./data/cardInfo.js";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="cardDisplayContainer">
        {cardInfo.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
