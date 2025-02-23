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
import { TodoEntity, FilterByType } from "@/features/todo/utils/todo.types";
import { mockApiCall } from "@/utils/mockApiCall";
import mockTodos from "@/data/mockTodos.json";

interface ITodoContext {
  todos: TodoEntity[];
  selectedTaskId: number;
  searchTerm: string;
  filterBy: FilterByType;
  setFilterBy: Dispatch<SetStateAction<FilterByType>>;
  searchTaskQuery: (searchTerm: string) => void;
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
  const [todos, setTodos] = useState<TodoEntity[]>(mockTodos);
  const [selectedTaskId, setSelectedTaskId] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState<FilterByType>("all");
  const [creating, setCreating] = useState(false);
  const [created, setCreated] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);

  async function searchTaskQuery(searchTerm: string) {
    setSearchTerm(searchTerm);
    if (searchTerm.length > 0) {
      const searchedTodos = mockTodos.filter(
        ({ task }) => task.search(new RegExp(searchTerm, "i")) > -1
      );
      setTodos(searchedTodos);
    } else {
      setTodos(mockTodos);
    }
  }

  async function createTaskMutation(task: string) {
    setCreating(true);
    setCreated(false);
    // await mockApiCall();
    const d = new Date();
    const body = {
      id: d.getTime(),
      is_done: false,
      created_at: d.toISOString(),
      task,
    };
    //
    setTodos((prev) => [body, ...prev]);
    setCreating(false);
    setCreated(true);
    setFilterBy("all");
  }

  async function deleteTaskMutation(taskId: number) {
    setSelectedTaskId(taskId);
    setDeleting(true);
    setDeleted(false);
    // await mockApiCall();
    const updatedTodos = todos.map((item) =>
      // item.id === taskId ? { ...item, is_done: !item.is_done } : item
      item.id === taskId ? { ...item, is_done: true } : item
    );
    //
    setTodos(updatedTodos);
    setDeleting(false);
    setDeleted(true);
  }

  const value = useMemo(
    () => ({
      todos,
      selectedTaskId,
      searchTerm,
      filterBy,
      setFilterBy,
      searchTaskQuery,
      createTaskMutation,
      creating,
      created,
      deleteTaskMutation,
      deleting,
      deleted,
    }),
    [todos, filterBy]
  );

  console.log("🚀 ~ TodoContextProvider");
  // RENDER
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
