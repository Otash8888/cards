import React from "react";
import { Button } from 'semantic-ui-react'

const ShuffleCurrentDeck = props => {


  return (
    <div >
      <Button onClick = {e => props.handleShuffleCurrentDeck()} className="massive ui button" disabled = { props.buttonDisabled }>
        Shuffle Current Deck
      </Button>
    </div>
  );

};

export default ShuffleCurrentDeck;
