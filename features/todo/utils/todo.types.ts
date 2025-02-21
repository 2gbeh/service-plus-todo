export interface FakeTodoEntity {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoEntity {
  id: number;
  task: string;
  is_done: boolean;
  created_at: string;
}

export type FilterType = "all" | "completed"
