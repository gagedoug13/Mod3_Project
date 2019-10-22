class Band < ApplicationRecord
    has_many :shows
    has_many :venues, through: :shows
    has_many :users, through: :shows
end
