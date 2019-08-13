Rails.application.routes.draw do

  namespace :api do

    namespace :v1 do
      resources :category
      resources :entry
      
    end

  end

end
