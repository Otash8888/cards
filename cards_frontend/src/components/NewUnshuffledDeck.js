import React from "react";

const NewUnshuffledDeck = props => {

  return (
    <div >
      <button onClick = {e => props.handleNewUnshuffledDeck()} class="massive ui button">
        New Unshuffled Deck
      </button>
    </div>
  );

};

export default NewUnshuffledDeck;
