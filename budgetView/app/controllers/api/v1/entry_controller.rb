module Api::V1

  class EntryController < ApplicationController

    skip_before_action :authenticate

    def create
      @entry = Entry.create(entry_params)
      updateCategoryTotal(@entry.amount, @entry.category_id)
    end

    def destroy
      @entry = Entry.find(params[:id])
      updateCategoryTotal(-@entry.amount, @entry.category_id)
      @entry.destroy
    end

    def new
    end


    private

    def entry_params

      params.require(:entry).permit(
        :category_id,
        :amount,
        :name,
        :description,
        :date,
      )
    end

    def updateCategoryTotal(entry_amount, category_id)
      @category = Category.find(category_id)
      newTotal = @category.current_total + entry_amount;
      @category.update(current_total: newTotal)
    end

  end

end