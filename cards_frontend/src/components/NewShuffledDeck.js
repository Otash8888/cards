import React from "react";
import { Form, Button } from 'semantic-ui-react'

class NewShuffledDeck extends React.Component {
  state = { deck_count: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    this.props.handleNewShuffledDeck(parseInt(this.state.deck_count))
    this.setState({ deck_count: '' })
  }

  render() {
    const { deck_count } = this.state
    return (
      <div className="column">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input placeholder='Enter number of decks' name='deck_count' value={deck_count} onChange={this.handleChange} type="number" />
            <Button type='submit' className="ui teal button">Create Deck </Button>
          </Form.Group>
        </Form>
      </div >
    )
  }
}

export default NewShuffledDeck
