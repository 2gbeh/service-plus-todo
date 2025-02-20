import { useTodo } from "@/features/todo";
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

type TodoType = "light" | "dark";

interface ITodoContext {
  theme: TodoType;
  setTodo: Dispatch<SetStateAction<TodoType>>;
  toggleTodo: () => void;
}

const TodoContext = createContext<ITodoContext | undefined>(undefined);

export function useTodoContext() {
  const themeContext = useContext(TodoContext);

  if (themeContext === undefined) {
    throw new Error(
      "ContextError: useTodoContext can only be used within TodoContextProvider"
    );
  }

  return themeContext;
}

export const TodoContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTodo] = useState<TodoType>("light");
  const {} = useTodo();

  const toggleTodo = () =>
    setTodo((prev) => (prev === "light" ? "dark" : "light"));

  const value = useMemo(() => ({ theme, setTodo, toggleTodo }), [theme]);

  console.log("🚀 ~ TodoContextProvider");
  // RENDER
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
