class Deck < ApplicationRecord
  def shuffle_cards
    shuffled_array = self.cards_array.shuffle
    self.update(cards_array: shuffled_array)
  end

  def return_five_cards
    cards = self.cards_array[0..4]
    self.cards_array.shift(5)
    self.save
    cards = cards.map{|card| Card.find(card.to_i)}
    return cards
  end
end
