class Category < ApplicationRecord
	belongs_to :user
	has_many :entries


	validates :name, presence: true
	validates :board_type, presence: true
	validates :goal, numericality: true, presence: true
	validates :current_total, numericality: true, presence: true

	

end
