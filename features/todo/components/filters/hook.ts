import { useTodoContext } from "@/context/TodoContext";

export function useFilters() {
  const { filterBy, setFilterBy } = useTodoContext();
  //
  let isAll = filterBy === "all";
  let isCompleted = filterBy === "completed";

  return { setFilterBy, isAll, isCompleted };
}
