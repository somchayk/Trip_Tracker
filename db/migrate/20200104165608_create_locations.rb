class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.date :date_arrived
      t.float :latitude
      t.float :longitude
      t.string :img_url
      t.integer :days
      t.integer :expected_cost
      t.belongs_to :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
