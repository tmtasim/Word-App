defmodule WordServiceWeb.MessageController do
  alias WordService.MessageProc

  use WordServiceWeb, :controller

  def create(conn, payload) do
    case MessageProc.save_message(payload["message"]) do
      {:ok, message} -> json(conn, %{success: true, id: message.id})
      _ -> json(conn, %{success: false})
    end
  end

  def show(conn, payload) do
    json(conn, MessageProc.get_message_by_id(payload["id"]))
  end

  def delete(conn, payload) do
    case MessageProc.delete_message(payload["id"]) do
      {:ok, _} -> json(conn, %{success: true, id: payload["id"]})
      _ -> json(conn, %{success: false})
    end
  end

  def index(conn, _) do
    json(conn, MessageProc.get_all_messages())
  end
end
