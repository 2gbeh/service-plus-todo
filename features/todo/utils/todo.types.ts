export interface TodoEntity {
  id: number;
  task: string;
  is_done: boolean;
  created_at: string;
}

export type FilterType = "all" | "completed"
