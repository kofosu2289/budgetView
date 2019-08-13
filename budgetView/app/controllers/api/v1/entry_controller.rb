module Api::V1

  class EntryController < ApplicationController

    def show
      @entry = Entry.find(2)
      render json: @entry
    end

    def create
    end

    def destroy
    end

    def new
    end
    
  end

end
