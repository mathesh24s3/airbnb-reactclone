import React from "react";
import "../styles/styles.css";
import "../styles/cards.css";

export default function Card({ items: props }) {
  let badgeText;
  if (!props.openSpots) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img className="card-img" src={`images/${props.coverImg}`} />
      <p className="stats">
        <img className="star" src="images/star.png" />
        {props.stats.rating}{" "}
        <span className="light-text">
          {" "}
          ({props.stats.reviewCount}) . {props.location}{" "}
        </span>
      </p>
      <p className="title">{props.title}</p>
      <p className="price">
        <span className="bold-text">From ${props.price}</span> / person
      </p>
    </div>
  );
}
