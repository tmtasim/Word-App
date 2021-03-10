defmodule WordService.Repo.Migrations.AddMessagesTable do
  use Ecto.Migration

  def change do
    create table("messages") do
      add :content, :string
      add :is_palindrome, :boolean

      timestamps()
    end
  end
end
