class Entry < ApplicationRecord
	belongs_to :category

	validates :name, presence: true
	validates :date, presence: true
	validates :amount, numericality: true, presence: true
end
