module Api::V1

  class CategoryController < ApplicationController

    skip_before_action :authenticate

    def index
      @categories = Category.where(user_id: params[:user_id])
      @categories = @categories.order(id: :desc).all
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
    end

    def update
      category = Category.find(params[:id])
      category.goal = params[:newGoal]
      category.save
    end

    private
    def category_params
      params.require(:category).permit(
        :name,
        :user_id,
        :board_type,
        :goal,
        :current_total,
        :icon,
        :color
        )
    end
  end
end
