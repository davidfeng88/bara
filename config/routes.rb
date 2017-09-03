Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :businesses do
      get 'feature', on: :collection
    end
    resources :reviews, only: [:create, :destroy, :update]
  end

end
