import React from "react";
import DrawedCard from "../components/DrawedCard";

class CardCollection extends React.Component {
  render(){
    let { drawedCards } = this.props
    let arrOfCards

    if (drawedCards) {
      arrOfCards = drawedCards.map((card) => {
        return <DrawedCard card = {card} key={card.id}/>
      })
    }

    return (
      <section class="cards">
        {arrOfCards}
      </section>
  	)
  }
}

export default CardCollection;
