import { useEffect, useState } from "react";
import { useTodoContext } from "@/context/TodoContext";

export function useFooter() {
  const { todos, createTaskMutation, creating } = useTodoContext();
  const [task, setTask] = useState<string>("");
  //
  const handleSubmit = () => {
    if (task && task.length >= 3) createTaskMutation(task);
  };
  //
  useEffect(() => {
    setTask("");
  }, [todos]);

  return { task, setTask, handleSubmit, creating };
}
