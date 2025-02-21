import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { capitalize } from "lodash";
//
import {
  DeleteOutlineIcon,
  SearchActivityIcon,
  ScheduleOutlineIcon,
} from "@/constants/ICON";
import { COLOR } from "@/constants/COLOR";
import { TodoPipe } from "../../utils/todo.pipe";
//
import { useTodoList } from "./hook";
import { todoListStyles as s } from "./styles";

type PropsType = {};

const TodoList: React.FC<PropsType> = () => {
  const { filterBy, filteredTodos, deleteTaskMutation } = useTodoList();
  console.log("🚀 ~ TodoList", filteredTodos);
  // RENDER
  return (
    <FlatList
      data={filteredTodos}
      keyExtractor={(item) => String(item.id)}
      ListEmptyComponent={renderNoData}
      ListHeaderComponent={() => (
        <View style={s.static.header}>
          <Text style={s.static.heading}>{capitalize(filterBy)} tasks</Text>
          <Text style={s.static.total}>Total {filteredTodos.length}</Text>
        </View>
      )}
      renderItem={({ item }) => {
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
