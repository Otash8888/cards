class CreateDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :decks do |t|
      t.integer :player_id
      t.string :cards_array, array: true, default: []
      t.boolean :shuffled

      t.timestamps
    end
  end
end
