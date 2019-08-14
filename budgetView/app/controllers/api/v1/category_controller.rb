module Api::V1

  class CategoryController < ApplicationController

    def index
      @categories = Category.all
      render json: @categories
    end

    def show

      @category = Category.find params[:id]
      @entries = Entry.where(category_id: @category.id)
      @entries = @entries.order(id: :desc).all
      render json: [@category, @entries]
    end

    def create
      category = Category.create(category_params)


    end



    def new
      category = Category.new
    end

    def destroy
      @category = Category.find(params[:id])
      @category.destroy

      redirect_to '/'
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
