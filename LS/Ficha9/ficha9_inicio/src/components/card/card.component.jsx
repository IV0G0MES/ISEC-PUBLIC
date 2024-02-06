import React from "react";
import "./card.css";
import {
  PLACEHOLDER_CARD_PATH,
  PLACEHOLDER_CARDBACK_PATH,
} from "../../constants";

const Card = (props) => {
  return (
    <div className="card" data-logo={props.className}>
      <img src={PLACEHOLDER_CARDBACK_PATH} className="card-back" />
      <img
        src={PLACEHOLDER_CARD_PATH + props.className + ".png"}
        className="card-front"
      />
    </div>
  );
};

export default Card;
