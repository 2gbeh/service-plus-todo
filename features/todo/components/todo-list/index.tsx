import React from "react";
import { View, Text, FlatList } from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
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
  const { filteredTodos, selectedTaskId, filterBy, deleteTaskMutation } =
    useTodoList();
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
          <ReanimatedSwipeable
            renderRightActions={() => (
              <View style={s.static.rightAction}>
                <DeleteOutlineIcon width={24} color={COLOR.error} />
              </View>
            )}
            onSwipeableOpen={() => deleteTaskMutation(item.id)}
          >
            <View style={s.card(item.id === selectedTaskId).transform}>
              <Text style={s.static.title}>{item.task}</Text>
              <View style={s.static.subtitleWrapper}>
                <ScheduleOutlineIcon width={18} color={COLOR.icon} />
                <Text style={s.static.subtitle}>
                  {transformedItem.created_at_format}
                </Text>
              </View>
            </View>
          </ReanimatedSwipeable>
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
