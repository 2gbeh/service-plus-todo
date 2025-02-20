import {
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { TodoEntity } from "@/features/todo/utils/todo.types";
import { mockApiCall } from "@/utils/mockApiCall";

interface ITodoContext {
  todos: TodoEntity[];
  createTaskMutation: (task: string) => void;
  creating: boolean;
  created: boolean;
}

const TodoContext = createContext<ITodoContext | undefined>(undefined);

export function useTodoContext() {
  const todoContext = useContext(TodoContext);
  if (todoContext === undefined) {
    throw new Error(
      "ContextError: useTodoContext can only be used within TodoContextProvider"
    );
  }
  return todoContext;
}

export const TodoContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [todos, setTodos] = useState<TodoEntity[]>([]);
  const [creating, setCreating] = useState(false);
  const [created, setCreated] = useState(false);

  async function createTaskMutation(task: string) {
    setCreating(true);
    //
    const d = new Date();
    const body = {
      id: d.getTime(),
      done: false,
      created_at: d.toISOString(),
      task,
    };
    await mockApiCall();
    //
    setTodos((prev) => [body, ...prev]);
    setCreating(false);
    setCreated(true);
  }

  const value = useMemo(
    () => ({ todos, createTaskMutation, creating, created }),
    [creating]
  );

  console.log("🚀 ~ TodoContextProvider");
  // RENDER
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
