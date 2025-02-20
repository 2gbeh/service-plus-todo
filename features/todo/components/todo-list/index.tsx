import React from "react";
import { View, Text, FlatList } from "react-native";
//
import { DeleteOutlineIcon, SearchActivityIcon } from "@/constants/ICON";
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
      ListEmptyComponent={renderNoData}
      ListHeaderComponent={() => renderListHeader(data?.length)}
      renderItem={renderListItem}
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
