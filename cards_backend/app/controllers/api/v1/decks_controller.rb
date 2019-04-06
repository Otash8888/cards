class Api::V1::DecksController < ApplicationController
  def index
    @decks = Deck.all
    render json: @decks
  end

  private

  def deck_params
    params.permit(:player_id, :shuffled)
  end

  def find_player
    @deck = Deck.find(params[:id])
  end
end
