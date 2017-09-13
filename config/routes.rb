Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create show]
    resource :session, only: %i[create destroy]
    resources :businesses, only: %i[index show create update destroy] do
      get 'feature', on: :collection
    end
    resources :reviews, only: %i[show create destroy update]
  end
end
