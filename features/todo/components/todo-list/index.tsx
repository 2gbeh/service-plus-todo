import React from "react";
import { View, Text } from "react-native";
import { format } from "date-fns";
//
import Filters from "../filters";
import { DeleteOutlineIcon } from "@/constants/ICON";
import { TodoEntity } from "../../utils/todo.types";
import { todoListStyles as s } from "./styles";

type PropsType = { data?: TodoEntity[] };

const TodoList: React.FC<PropsType> = ({ total = 0 }) => {
  console.log("🚀 ~ TodoList");
  // RENDER
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => String(item.id)}
      ListHeaderComponent={<Filters total={todos?.length} />}
      renderItem={(renderListItem}
      ItemSeparatorComponent={() => <View style={s.listItemSeparator} />}
      contentContainerStyle={s.listContainer}
    />
  );
};

export default React.memo(TodoList);

const renderListItem = () => (
  <View style={s.listItem}>
    <View style={{ flex: 1, rowGap: 4 }}>
      <Text style={{ fontWeight: 600, fontSize: 16 }}>
        {/* {index + 1}.  */}
        {item.title}
      </Text>
      <Text style={{ fontSize: 14, color: "#555" }}>
        Created{" "}
        {[
          format(new Date(), "h:mm a"),
          format(new Date(), "h:mm a"),
          "Yesterday",
          "Yesterday",
          "Yesterday",
        ][index] ?? format(new Date(), "M/d/yy")}
      </Text>
    </View>
    <DeleteOutlineIcon width={18} color="#e11" />
  </View>
);