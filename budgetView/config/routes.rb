Rails.application.routes.draw do

  namespace :api do

    namespace :v1 do
      resources :category
      resources :entry
      resources :sessions, only: [:new, :create, :destroy]
      resources :users, only: [:create]

    end

  end

end
