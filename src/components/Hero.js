import React from "react";
import "../styles/styles.css";
import "../styles/hero.css";

export default function HeroContent() {
  return (
    <section className="hero">
      <img className="hero--grid" src="images/group-77.png"/>
      <h3>Online Experiences</h3>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
