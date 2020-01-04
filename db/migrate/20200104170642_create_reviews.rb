class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.integer :stars
      t.string :subject
      t.text :body
      t.string :author
      t.belongs_to :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
