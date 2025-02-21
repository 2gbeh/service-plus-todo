import React from "react";
import { View, Text, Pressable } from "react-native";
//
import { useTodoContext } from "@/context/TodoContext";
import { filtersStyles as s } from "./styles";

type PropsType = {};

const Filters: React.FC<PropsType> = () => {
  const { filter, setFilter } = useTodoContext();
  let isAll = filter === "all";
  let isCompleted = filter === "completed";
  console.log("🚀 ~ Filters");
  // RENDER
  return (
    <View style={s.static.container}>
      <Pressable
        onPress={() => setFilter("all")}
        style={s.tab(isAll).transform}
      >
        <Text style={s.tabText(isAll).transform}>All</Text>
      </Pressable>
      <Pressable
        onPress={() => setFilter("completed")}
        style={s.tab(isCompleted).transform}
      >
        <Text style={s.tabText(isCompleted).transform}>Completed</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Filters);
