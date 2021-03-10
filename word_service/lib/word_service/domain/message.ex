defmodule WordService.Domain.Message do
  use Ecto.Schema
  @derive {Jason.Encoder, only: [:content, :is_palindrome]}

  schema "messages" do
    field :content, :string
    field :is_palindrome, :boolean

    timestamps()
  end

  def changeset(message, params \\ %{}) do
    message
    |> Ecto.Changeset.cast(params, [:content, :is_palindrome])
    |> Ecto.Changeset.validate_required([:content])
  end
end
