import { useEffect, useState } from "react";
//
import fakeTodos from "@/data/fakeTodos.json";
import { TodoEntity } from "../utils/todo.types";

export function useTodo() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [todos, setTodos] = useState<TodoEntity[] | undefined>(fakeTodos);
  const [todo, setTodo] = useState<string | undefined>();
  const [selectedTodo, setSelectedTodo] = useState<string | undefined>();
  //
  async function getTodosQuery() {
    const url = process.env.EXPO_PUBLIC_API_URL + "/todos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }
  async function postTodoMutation() {
    const url = process.env.EXPO_PUBLIC_API_URL + "/todos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }
  //
  useEffect(() => {
    // getTodosQuery();
  }, []);

  return { todos, todo, setTodo };
}
