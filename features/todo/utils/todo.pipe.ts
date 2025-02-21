import { DateHelper as D } from "@/utils/helpers/date.helper";
import { TodoEntity } from "./todo.types";

export class TodoPipe {
  static validate() {}

  static prepare() {}

  static transform(todo: TodoEntity) {
    const t = todo;
    return {
      ...t,
      created_at_format: D.createdAtFormat(t.created_at),
    };
  }
}
