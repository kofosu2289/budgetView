module Api::V1

  class EntryController < ApplicationController


    def index
      @entry = Category.all
      render json: @entry
    end

    def create
      @entry = Entry.new(entry_params)
      @entry.save
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
