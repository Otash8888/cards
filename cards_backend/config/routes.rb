Rails.application.routes.draw do


  get '/players/:id', to: 'players#show'
  get '/decks', to: 'decks#index'

  namespace :api do
    namespace :v1 do
      resources :players, only: [:index, :show, :create]
      resources :decks
    end
  end
end
