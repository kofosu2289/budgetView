module Api::V1

  class CategoryController < ApplicationController

    def index
      @category = Category.all
      render json: @category 
    end

    def show

    end

    def create
      
      @newCategory = Category.create(category_params)
      render json: @newCategory
    
     

    end



    def new
    end

    def destroy
    end

    private

    def category_params
      params.require(:category).permit(
    
        :name,
        :user_id,
        :board_type,
        :goal,
        :current_total
        )
    end


  end

end
