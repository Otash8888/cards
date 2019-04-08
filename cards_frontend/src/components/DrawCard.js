import React from "react";
import { Button } from 'semantic-ui-react'

const DrawCard = props => {

  console.log(props.buttonDisabled)

  return (
    <div >
      <Button onClick = {e => props.handleDraw()} className="massive ui button" disabled = { props.buttonDisabled } >
        Draw five cards
      </Button>
    </div>
  );

};

export default DrawCard;
