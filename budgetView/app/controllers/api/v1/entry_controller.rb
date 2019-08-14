module Api::V1

  class EntryController < ApplicationController

    def create
      @entry = Entry.create(entry_params)
    end

    def destroy
      @entry = Entry.find(params[:id])
      @entry.destory
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
