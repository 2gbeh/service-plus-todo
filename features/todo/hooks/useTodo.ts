import { useEffect, useState } from "react";
import fakeTodos from "@/data/fakeTodos.json";

interface TodoEntity {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export function useTodo() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [todos, setTodos] = useState<TodoEntity[] | undefined>(fakeTodos);
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
  useEffect(() => {
    // getTodosQuery();
  }, []);

  return { todos };
}
