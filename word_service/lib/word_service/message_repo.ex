defmodule WordService.MessageRepo do
  alias WordService.Domain.Message
  alias WordService.Repo

  def save(message) do
    changeset = Message.changeset(%Message{}, message)
    Repo.insert(changeset)
  end

  def delete(message_id) do
    message =
      case Repo.get(Message, message_id) do
        nil -> :not_found
        message -> Repo.delete(message)
      end
  end

  def get_by_id(id) do
    Repo.get(Message, id)
  end

  def get_all() do
    Repo.all(Message)
  end
end
