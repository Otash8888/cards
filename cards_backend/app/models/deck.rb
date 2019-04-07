class Deck < ApplicationRecord
  def shuffle_cards
    shuffled_array = self.cards_array.shuffle
    self.update(cards_array: shuffled_array, shuffled: true)
  end

  def draw_five_cards
    card_codes = self.cards_array.pop(5)
    self.save
    cards = card_codes.map{|card_code| Card.find_by(code: card_code)}
    return cards
  end

end
