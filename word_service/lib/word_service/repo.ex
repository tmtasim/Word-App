defmodule WordService.Repo do
  use Ecto.Repo,
    otp_app: :word_service,
    adapter: Ecto.Adapters.Postgres
end
