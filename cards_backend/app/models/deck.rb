class Deck < ApplicationRecord
  belongs_to :player
  
  def shuffle_cards
    shuffled_array = self.card_codes.shuffle
    self.update(card_codes: shuffled_array, shuffled: true)
  end

  def draw_five_cards
    card_codes = self.card_codes.pop(5)
    self.save
    cards = card_codes.map{|card_code| Card.find_by(code: card_code)}
    return cards
  end

end
