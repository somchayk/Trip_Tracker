Rails.application.routes.draw do

  namespace :api do
    resources :trips do
      resources :locations
    end
  end

  namespace :api do
    resources :trips do
      resources :reviews
    end
  end
  

end
