import React from "react";
import { Button } from 'semantic-ui-react'

const DrawedCard = props => {
  const { card } = props;
  let suitType = card.suit.toLowerCase()
  let value
  let suitDesign

  if (parseInt(card.value)) {
    value = card.value
  }else {
    value = (card.value)[0]
  }

  switch (value) {
    case "2":
      suitDesign =
      <div class="card__inner card__inner--centered">
        <div class="card__column">
          <div class="card__symbol"></div>
          <div class="card__symbol"></div>
        </div>
      </div>
      break;
    case "3":
      suitDesign =
      <div class="card__inner card__inner--centered">
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  			</div>
  		</div>
      break;
    case "4":
      suitDesign =
      <div class="card__inner">
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  			</div>
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  			</div>
		  </div>
      break;
    case "5":
      suitDesign =
      <div class="card__inner">
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  			</div>
  			<div class="card__column card__column--centered">
  				<div class="card__symbol"></div>
  			</div>
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  			</div>
  		</div>
      break;
    case "6":
      suitDesign =
      <div class="card__inner">
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  			</div>
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  			</div>
  		</div>
      break;
    case "7":
      suitDesign =
      <div class="card__inner">
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  			</div>
  			<div class="card__column card__column--centered">
  				<div class="card__symbol card__symbol--huge"></div>
  			</div>
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  			</div>
  		</div>
      break;
    case "8":
      suitDesign =
      <div class="card__inner">
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  			</div>
  			<div class="card__column card__column--centered">
  				<div class="card__symbol card__symbol--big"></div>
  				<div class="card__symbol card__symbol--big"></div>
  			</div>
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  			</div>
  		</div>
      break;
    case "9":
      suitDesign =
      <div class="card__inner">
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  				<div class="card__symbol card__symbol--rotated"></div>
  				<div class="card__symbol"></div>
  			</div>
  			<div class="card__column card__column--centered">
  				<div class="card__symbol card__symbol"></div>
  			</div>
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  				<div class="card__symbol card__symbol--rotated"></div>
  				<div class="card__symbol"></div>
  			</div>
  		</div>
      break;
    case "10":
      suitDesign =
      <div class="card__inner">
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  				<div class="card__symbol card__symbol--rotated"></div>
  				<div class="card__symbol"></div>
  			</div>
  			<div class="card__column card__column--centered">
  				<div class="card__symbol card__symbol--big"></div>
  				<div class="card__symbol card__symbol--big"></div>
  			</div>
  			<div class="card__column">
  				<div class="card__symbol"></div>
  				<div class="card__symbol"></div>
  				<div class="card__symbol card__symbol--rotated"></div>
  				<div class="card__symbol"></div>
  			</div>
  		</div>
      break;
    default:
      suitDesign =
      <div class="card__inner card__inner--centered">
        <div class="card__column card__column--centered">
  				<div class="card__symbol card__symbol"></div>
  			</div>
      </div>
  }

  return (
    <section class={`card card--${suitType}`} value={value}>
  		{suitDesign}
	  </section>
  )
}

export default DrawedCard
