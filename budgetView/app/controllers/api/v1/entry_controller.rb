module Api::V1

  class EntryController < ApplicationController

    skip_before_action :authenticate

    def create
      @entry = Entry.create(entry_params)
      @category = Category.find(@entry.category_id)
      @entries = Entry.where(category_id: @category.id)
      newTotal = @entry.amount + @category.current_total;
      @category.update(current_total: newTotal)
    end

    def destroy
      @entry = Entry.find(params[:id])
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

  end

end
