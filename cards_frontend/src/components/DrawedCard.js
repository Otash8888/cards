import React from "react";

const DrawedCard = props => {

  const { card } = props;

  let suitType;

  switch (card.suit) {
    case "HEARTS":
      suitType =
      <i className="icon military" />;
      break;
    case "SPADES":
      suitType = <i className="icon" src='../card_icons/spades_icon.svg' />;
      break;
    case "DIAMONDS":
      suitType = <i className="icon shield" />;
      break;
    case "CLUBS":
      suitType = <i className="icon ambulance" />;
      break;
    default:
      suitType = <div />;
  }

  return (
    <div className="ui column" >
      <div className="ui card" key={card.id}>
        <div className="header">
          {card.value} {card.suit} {suitType}
        </div>


      </div>
    </div>
  );

};

export default DrawedCard;
