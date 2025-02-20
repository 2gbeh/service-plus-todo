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
      {/* TOTALED */}
      <Text style={s.static.totaled}>Total {total}</Text>
    </View>
  );
};

export default React.memo(Filters);
