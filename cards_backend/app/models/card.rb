class Card < ApplicationRecord

  def self.shuffled_card_codes(deck_count)
    (Card.all.map{|card| card.code} * deck_count).shuffle
  end

  def self.card_codes_to_a(codes)
    codes.split(",")
  end
end
