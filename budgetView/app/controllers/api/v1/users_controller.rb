module Api::V1

  class UsersController < ApplicationController

    skip_before_action :authenticate, :raise => false

    def create
      user = User.new(user_params)
      puts user.inspect
      if user.save
        render json: {
          status: 201,
          message: "user successfully created"
        }
      end

    end

    def user_params
      params.require(:user).permit(
        :first_name,
        :last_name,
        :email,
        :password,
        :password_confirmation
      )
    end

  end

end
