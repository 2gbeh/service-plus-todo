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
  pendingTodos: TodoEntity[];
  doneTodos: TodoEntity[];
  createTaskMutation: (task: string) => void;
  creating: boolean;
  created: boolean;
  deleteTaskMutation: (taskId: number) => void;
  deleting: boolean;
  deleted: boolean;
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
  const [deleting, setDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const pendingTodos = useMemo(
    () => todos.filter(({ done }) => done === false),
    [todos]
  );
  const doneTodos = useMemo(
    () => todos.filter(({ done }) => done === true),
    [todos]
  );

  async function createTaskMutation(task: string) {
    setCreating(true);
    setCreated(false);
    //
    await mockApiCall();
    const d = new Date();
    const body = {
      id: d.getTime(),
      done: false,
      created_at: d.toISOString(),
      task,
    };
    //
    setTodos((prev) => [body, ...prev]);
    setCreating(false);
    setCreated(true);
  }

  async function deleteTaskMutation(taskId: number) {
    setDeleting(true);
    setDeleted(false);
    //
    await mockApiCall();
    const updatedTodos = todos.map((item) =>
      item.id === taskId ? { ...item, done: true } : item
    );
    //
    setTodos(updatedTodos);
    setDeleting(false);
    setDeleted(true);
  }

  const value = useMemo(
    () => ({
      todos,
      pendingTodos,
      doneTodos,
      createTaskMutation,
      creating,
      created,
      deleteTaskMutation,
      deleting,
      deleted,
    }),
    [todos, creating, deleting]
  );

  console.log("🚀 ~ TodoContextProvider");
  // RENDER
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
