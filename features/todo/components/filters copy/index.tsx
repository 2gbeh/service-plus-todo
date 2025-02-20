import React from "react";
import { View, Text } from "react-native";
//
import { filtersStyles as s } from "./styles";

type PropsType = { total?: number };

const Filters: React.FC<PropsType> = ({ total = 0 }) => {
  console.log("🚀 ~ Filters");
  // RENDER
  return (
    <View style={s.static.container}>
      <View style={s.static.tabs}>
        <View style={s.tab(true).transform}>
          <Text style={s.tabText(true).transform}>All</Text>
        </View>
        <View style={s.tab().transform}>
          <Text style={s.tabText().transform}>Completed</Text>
        </View>
      </View>
      <View style={s.static.sectionHeader}>
        <Text style={s.static.sectionHeading}>Recent todos</Text>
        <Text style={s.static.sectionSubText}>Total {total}</Text>
      </View>
    </View>
  );
};

export default React.memo(Filters);
