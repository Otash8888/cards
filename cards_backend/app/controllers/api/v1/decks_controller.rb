class Api::V1::DecksController < ApplicationController

  def new_shuffle
    #if deck_count passed, we assign to the params value, otherwise assign to 1
    params[:deck_count] ? deck_count = params[:deck_count].to_i : deck_count = 1
    #creating and shuffling card codes based on passed values
    shuffled_card_codes = params[:cards] ? Card.card_codes_to_a(params[:cards]) : Card.shuffled_card_codes(deck_count)
    @deck = Deck.create(card_codes: shuffled_card_codes, player_id: 1, shuffled: true)

    render json: {
                    deck_id: @deck.id,
                    shuffled: true,
                    remaining: @deck.card_codes.count
                 }
  end

  def new_unshuffled
    card_codes = Card.card_codes
    @deck = Deck.create(card_codes: card_codes, player_id: 1, shuffled: false, )
    render json: {
                    deck_id: @deck.id,
                    shuffled: @deck.shuffled,
                    remaining: @deck.card_codes.count,
                    test: @deck.card_codes
                 }
  end

  def draw
    @deck = Deck.find(params[:id])
    drawed_cards = @deck.draw_five_cards
    render json: {
                    cards: drawed_cards,
                    deck_id: @deck.id,
                    remaining: @deck.card_codes.count
                 }
  end

  def reshuffle
    @deck = Deck.find(params[:id])
    @deck.shuffle_cards
    render json: {
                    deck_id: @deck.id,
                    shuffled: @deck.shuffled,
                    remaining: @deck.card_codes.count
                 }
  end

  private

  def deck_params
    params.permit(:player_id, :shuffled,)
  end

end
