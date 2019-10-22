class Venue < ApplicationRecord
    has_many :shows
    has_many :bands, through: :shows
    has_many :users, through: :shows
end
