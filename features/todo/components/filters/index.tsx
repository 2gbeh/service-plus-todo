import React from "react";
import { View, Text, Pressable } from "react-native";
//
import { useTodoContext } from "@/context/TodoContext";
import { filtersStyles as s } from "./styles";

type PropsType = {};

const Filters: React.FC<PropsType> = () => {
  const { filterBy, setFilterBy } = useTodoContext();
  let isAll = filterBy === "all";
  let isCompleted = filterBy === "completed";
  console.log("🚀 ~ Filters");
  // RENDER
  return (
    <View style={s.static.container}>
      <Pressable
        onPress={() => setFilterBy("all")}
        style={s.tab(isAll).transform}
      >
        <Text style={s.tabText(isAll).transform}>All</Text>
      </Pressable>
      <Pressable
        onPress={() => setFilterBy("completed")}
        style={s.tab(isCompleted).transform}
      >
        <Text style={s.tabText(isCompleted).transform}>Completed</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Filters);
