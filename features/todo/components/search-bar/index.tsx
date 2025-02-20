import React from "react";
import { View, TextInput } from "react-native";
//
import { SearchIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/COLOR";
import { searchBarStyles as s } from "./styles";

type PropsType = {};

const SearchBar: React.FC<PropsType> = () => {
  console.log("🚀 ~ SearchBar");
  // RENDER
  return (
    <View style={s.container}>
      <SearchIcon style={s.icon} />
      <TextInput
        style={s.input}
        placeholder="Search ( / )"
        placeholderTextColor={COLOR.mutedText}
      />
    </View>
  );
};

export default React.memo(SearchBar);
