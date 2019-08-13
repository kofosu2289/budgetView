class User < ApplicationRecord
	has_many :categories

	validates :first_name, presence: true
	validates :last_name, presence: true
	validates :email, :uniqueness => {:case_sensitive => false}, presence: true
	validates :password_digest, presence: true, confirmation: true, length:{minimum:6}
	



end
