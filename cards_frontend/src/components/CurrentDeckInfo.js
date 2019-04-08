import React from "react";

const CurrentDeckInfo = props => {
  return (
    <div className="column">
      <h3>Current Deck Info</h3>
      <h5>{`Remaining cards: ${props.state.remaining}`}</h5>
      <h5>{`Deck shuffled?: ${props.state.shuffled ? 'Yes' : 'No'}`}</h5>
    </div>
  )
}

export default CurrentDeckInfo;
