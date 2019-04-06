class Api::V1::PlayersController < ApplicationController
  def index
    @players = Player.all
    render json: @players
  end

  def show
    @player = Player.find(params[:id])
    render json: @player
  end

  def create
    @player = Player.create(name: params[:name], age: params[:age])
    render json: @player
  end

  private

  def player_params
    params.permit(:name, :age)
  end

  def find_player
    @player = Player.find(params[:id])
  end
end
