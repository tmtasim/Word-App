# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :word_service,
  ecto_repos: [WordService.Repo]

# Configures the endpoint
config :word_service, WordServiceWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "jIBZr/az1im6tisXkHBCgFlIbDuLSRw1Wgimvg978sG4I4ykRqPUGKwUZlzlH+GX",
  render_errors: [view: WordServiceWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: WordService.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [signing_salt: "xp3nj15l"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
