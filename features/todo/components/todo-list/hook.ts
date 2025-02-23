import { useMemo } from "react";
import { useTodoContext } from "@/context/TodoContext";

export function useTodoList() {
  const { todos, selectedTaskId, filterBy, deleteTaskMutation } =
    useTodoContext();
  //
  const filteredTodos = useMemo(
    () =>
      todos.filter(({ is_done }) =>
        filterBy === "completed" ? is_done : !is_done
      ),
    [todos, filterBy]
  );

  return { filteredTodos, selectedTaskId, filterBy, deleteTaskMutation };
}
