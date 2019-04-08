import React from "react";
import DrawedCard from "../components/DrawedCard";

class CardCollection extends React.Component {
  
  state={
    clicked:false
  }

  render(){
    let { drawedCards } = this.props

    let arrOfCards
    if (drawedCards) {
      arrOfCards = drawedCards.map((card) => {
        return <DrawedCard card = {card} key={card.id}/>
      })
    }

    return (
  	  <div className="ui five column grid">
    		<div className="row">
          {arrOfCards}
        </div>
  	  </div>
  	);
  }

};

export default CardCollection;
