defmodule WordService.MessageProc do
  alias WordService.MessageRepo

  use GenServer

  # Public API
  def save_message(message) do
    message = %{content: message}

    GenServer.call(
      __MODULE__,
      {:save_message, Map.put(message, :is_palindrome, is_palindrome?(message.content))}
    )
  end

  def delete_message(message_id) do
    GenServer.call(__MODULE__, {:delete_message, message_id})
  end

  def get_message_by_id(message_id) do
    GenServer.call(__MODULE__, {:get_message_by_id, message_id})
  end

  def get_all_messages() do
    GenServer.call(__MODULE__, {:get_all_messages})
  end

  defp is_palindrome?(message) do
    message == String.reverse(message)
  end

  def start_link(args) do
    GenServer.start(__MODULE__, args, name: __MODULE__)
  end

  # GenServer callbacks
  def init(_args) do
    {:ok, %{}}
  end

  def handle_call({:save_message, message}, _from, state) do
    response = MessageRepo.save(message)

    {:reply, response, state}
  end

  def handle_call({:delete_message, id}, _from, state) do
    response = MessageRepo.delete(id)
    {:reply, response, state}
  end

  def handle_call({:get_message_by_id, id}, _from, state) do
    response = MessageRepo.get_by_id(id)

    {:reply, response, state}
  end

  def handle_call({:get_all_messages}, _from, state) do
    response = MessageRepo.get_all()

    {:reply, response, state}
  end
end
