import React from "react";
import { Button } from 'semantic-ui-react'

const DrawCard = props => {
  return (
    <div className="column">
      <Button className="fluid ui teal button" onClick = {e => props.handleDraw()} disabled = { props.buttonDisabled } >
        Draw five cards
      </Button>
    </div>
  )
}

export default DrawCard;
