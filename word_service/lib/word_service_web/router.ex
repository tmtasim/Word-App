defmodule WordServiceWeb.Router do
  use WordServiceWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api/v1", WordServiceWeb do
    pipe_through :api

    post "/message", MessageController, :create
    get "/message/:id", MessageController, :show
    delete "/message/:id", MessageController, :delete
    get "/message", MessageController, :index
  end
end
