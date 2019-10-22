class User < ApplicationRecord
    has_many :shows
    has_many :venues, through: :shows
    has_many :bands, through: :shows
end
