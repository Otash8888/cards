import React from "react";
import { Form } from 'semantic-ui-react'

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
    < div >
    <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input placeholder='Enter deck number' name='deck_count' value={deck_count} onChange={this.handleChange} type="number" />
          <Form.Button content='Create Shuffled Deck' />
        </Form.Group>
      </Form>
    </div >
  );
  }
};

export default NewShuffledDeck;
