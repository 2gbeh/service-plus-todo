import React from "react";
import { View, Text, FlatList } from "react-native";
import { format } from "date-fns";
//
import Filters from "../filters";
import { DeleteOutlineIcon, CloseIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/COLOR";
import { TodoEntity } from "../../utils/todo.types";
import { todoListStyles as s } from "./styles";

type PropsType = { data?: TodoEntity[] };

const TodoList: React.FC<PropsType> = ({ data }) => {
  console.log("🚀 ~ TodoList");
  // RENDER
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      ListHeaderComponent={<Filters total={data?.length} />}
      renderItem={renderListItem}
      ItemSeparatorComponent={() => <View style={s.static.separator} />}
      contentContainerStyle={s.static.container}
    />
  );
};

export default React.memo(TodoList);

const renderListItem = ({
  item,
  index,
}: {
  item: TodoEntity;
  index: string | number;
}) => (
  <View style={s.card().transform}>
    <View style={s.static.cardWrapper}>
      <Text style={s.static.title}>{item.title}</Text>
      <Text style={s.static.subtitle}>Created today</Text>
    </View>
    <DeleteOutlineIcon width={18} color={COLOR.icon} />
  </View>
);
