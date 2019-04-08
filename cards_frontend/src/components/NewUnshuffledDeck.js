import React from "react";
import { Button } from 'semantic-ui-react'

const NewUnshuffledDeck = props => {
  return (
    <div className="column">
      <Button className="fluid ui teal button" onClick = {e => props.handleNewUnshuffledDeck()}>
        New Unshuffled Deck
      </Button>
    </div>
  )
}

export default NewUnshuffledDeck;
