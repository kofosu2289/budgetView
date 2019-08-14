module Api::V1

  class SessionsController < ApplicationController

    skip_before_action :authenticate

    def new
    end

    def create
      user = User.find_by(email: params[:email])
      if user
        if user.authenticate(params[:password])
          jwt = Auth.issue({user: user.id})
          render json: {jwt: jwt}
        else
          render json: {error: "unauthorized"}, status: 401
        end
      else
        render json: {error: "user not found"}, status: 404
      end
    end

    def destroy
    end

  end

end
