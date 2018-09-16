Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :diaries, only: [:index] do
        resources :sections, only: [:index] do
          resources :departments, only: [:index]
        end
        collection do
          get 'search'
        end
      end
    end
  end
end
