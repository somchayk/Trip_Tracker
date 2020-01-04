class Trip < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :locations, dependent: :destroy
end
