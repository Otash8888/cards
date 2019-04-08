import React from "react";
import CardCollection from './CardCollection'
import DrawCard from "../components/DrawCard";
import NewUnshuffledDeck from "../components/NewUnshuffledDeck"
import ShuffleCurrentDeck from "../components/ShuffleCurrentDeck"
import NewShuffledDeck from "../components/NewShuffledDeck"

let buttonDisabled

class CardsPage extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
                  drawedCards:[],
                  deck_id: 0,
                  shuffled: false,
                  remaining: 0
                }

  }


  handleNewUnshuffledDeck = () => {
    fetch( "http://localhost:3000/api/v1/deck/new")
    .then(r=>r.json())
    .then((resp) => {
      let { deck_id } = resp
      let { shuffled } = resp
      let { remaining } = resp
      this.setState({
                    deck_id,
                    shuffled,
                    remaining,
                    },() => {
        console.log(this.state);
      })
    })
  }

  handleNewShuffledDeck = (deck_count) => {
    let newShuffledDeckUrl
    if (deck_count && deck_count !== 0) {
      newShuffledDeckUrl = `http://localhost:3000/api/v1/deck/new/shuffle/?deck_count=${deck_count}`
    } else {
      newShuffledDeckUrl = 'http://localhost:3000/api/v1/deck/new/shuffle'
    }
    console.log(deck_count)
    fetch(newShuffledDeckUrl)
    .then(r=>r.json())
    .then((resp) => {
      let { deck_id } = resp
      let { shuffled } = resp
      let { remaining } = resp
      this.setState({
                    deck_id,
                    shuffled,
                    remaining,
                    },() => {
        console.log(this.state);
      })
    })
  }

  handleDraw = () => {
    fetch( `http://localhost:3000/api/v1/deck/${this.state.deck_id}/draw`)
    .then(r=>r.json())
    .then((resp) => {
      let { cards } = resp
      let { deck_id } = resp
      let { remaining } = resp

      this.setState({
                    drawedCards: cards,
                    deck_id,
                    remaining,
                    },() => {
        console.log(this.state);
      })
    })
  }

  handleShuffleCurrentDeck = () => {
    fetch( `http://localhost:3000/api/v1/deck/${this.state.deck_id}/shuffle`)
    .then(r=>r.json())
    .then((resp) => {
      let { deck_id } = resp
      let { shuffled } = resp
      let { remaining } = resp
      this.setState({
                    deck_id,
                    shuffled,
                    remaining,
                    },() => {
        console.log(this.state);
      })
    })
  }







  render() {

    if(this.state.remaining === 0 || this.state.remaining < 5 ){
      buttonDisabled = true
    }else {
      buttonDisabled = false
    }
    return (
      <div>

        <div className="Row">
          <NewShuffledDeck handleNewShuffledDeck = {this.handleNewShuffledDeck }/>

          <NewUnshuffledDeck handleNewUnshuffledDeck = {this.handleNewUnshuffledDeck }/>
          <ShuffleCurrentDeck handleShuffleCurrentDeck = {this.handleShuffleCurrentDeck } buttonDisabled = {buttonDisabled}/>
          <DrawCard handleDraw = {this.handleDraw} buttonDisabled = {buttonDisabled}/>
        </div>
          <CardCollection drawedCards={this.state.drawedCards}
        />
      </div>
    );
  }
}



export default CardsPage;
