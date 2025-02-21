import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
//
import { useTodoContext } from "@/context/TodoContext";
import { DeleteOutlineIcon, SearchActivityIcon, ScheduleOutlineIcon} from "@/constants/ICON";
import { COLOR } from "@/constants/COLOR";
import { TodoEntity } from "../../utils/todo.types";
import { todoListStyles as s } from "./styles";
import { TodoPipe } from "../../utils/todo.pipe";

type PropsType = {};

const TodoList: React.FC<PropsType> = () => {
  const { todos, filter, deleteTaskMutation, deleting, deleted } =
    useTodoContext();
  console.log("🚀 ~ TodoList", todos);
  // RENDER
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => String(item.id)}
      ListEmptyComponent={renderNoData}
      ListHeaderComponent={() => renderListHeader(todos?.length)}
      renderItem={({ item, index }) => {
        const transformedItem = TodoPipe.transform(item);
        return (
          <View style={s.card().transform}>
            <View style={s.static.cardWrapper}>
              <Text style={s.static.title}>{item.task}</Text>
              <View style={s.static.subtitleWrapper}>
                <ScheduleOutlineIcon width={18} color={COLOR.icon} />
                <Text style={s.static.subtitle}>
                  {transformedItem.created_at_format}
                </Text>
              </View>
            </View>
            <Pressable onPress={() => deleteTaskMutation(item.id)}>
              <DeleteOutlineIcon width={18} color={COLOR.icon} />
            </Pressable>
          </View>
        );
      }}
      ItemSeparatorComponent={() => <View style={s.static.separator} />}
      contentContainerStyle={s.static.container}
    />
  );
};

export default React.memo(TodoList);

const renderNoData = () => (
  <View style={s.static.noDataContainer}>
    <SearchActivityIcon color={COLOR.icon} />
    <Text style={s.static.noDataText}>No tasks found</Text>
  </View>
);

const renderListHeader = (total: number = 0) => (
  <View style={s.static.header}>
    <Text style={s.static.heading}>Recent tasks</Text>
    <Text style={s.static.total}>Total {total}</Text>
  </View>
);
