import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data";

export default function App() {
  const cardElement = cardData.map((data) => <Card items={data} />);
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards">{cardElement}</section>
    </div>
  );
}
