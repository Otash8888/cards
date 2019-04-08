import React from "react";
import { Button } from 'semantic-ui-react'

const ShuffleCurrentDeck = props => {
  return (
    <div className="column">
      <Button className="fluid ui teal button" onClick = {e => props.handleShuffleCurrentDeck()}  disabled = { props.buttonDisabled }>
        Shuffle Current Deck
      </Button>
    </div>
  )
}

export default ShuffleCurrentDeck;
