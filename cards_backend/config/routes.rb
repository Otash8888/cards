Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do

      get '/deck/new/shuffle/', to: 'decks#new_shuffle'
      get '/deck/new', to: 'decks#new_unshuffled'
      get '/deck/:id/draw', to: 'decks#draw'
      get '/deck/:id/shuffle', to: 'decks#reshuffle'

    end
  end
end
