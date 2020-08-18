Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:edit, :update, :delete, :index]
  resources :groups, only: [:new, :create, :edit, :update]  do
    resources :messages,only: [:index, :create]
    namespace :api do
      resources :messages, only: :index, defalts: { format: 'json' }
    end
  end
end
