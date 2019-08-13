module Api::V1

  class CategoryController < ApplicationController

    def index
      @category = Category.all
      render json: @category 
    end

    def show
    end

    def create
    end

    def new
    end

    def destroy
    end


  end

end
