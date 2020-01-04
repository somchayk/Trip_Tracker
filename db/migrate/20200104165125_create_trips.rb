class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :final_destination
      t.string :img_url
      t.date :start_date
      t.date :end_date
      t.integer :expected_cost

      t.timestamps
    end
  end
end
