Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    # resources :benches, only: [:index, :show, :create]
    # resources :reviews, only: [:create]
    # resource :favorites, only: [:create, :destroy]
  end

end
