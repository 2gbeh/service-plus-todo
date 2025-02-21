import { useEffect, useState } from "react";
import { useTodoContext } from "@/context/TodoContext";

export function useFooter() {
  const { createTaskMutation, creating, created } = useTodoContext();
  const [task, setTask] = useState<string>("");
  //
  const handleSubmit = () => {
    if (task && task.length >= 3) createTaskMutation(task);
  };
  //
  useEffect(() => {
    if (created) setTask("");
  }, [created]);

  return { task, setTask, handleSubmit, creating };
}
