class User < ApplicationRecord

	has_secure_password

	has_many :categories

	validates :first_name, presence: true
	validates :last_name, presence: true
	validates :email, :presence => true, :uniqueness => {:case_sensitive => false}
	validates :password_digest, presence: true, confirmation: true, length:{minimum:6}

end
