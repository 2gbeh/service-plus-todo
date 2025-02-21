import React from "react";
import { View, TextInput } from "react-native";
//
import { SearchIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/COLOR";
import { searchBarStyles as s } from "./styles";
import { useTodoContext } from "@/context/TodoContext";

type PropsType = {};

const SearchBar: React.FC<PropsType> = () => {
  const { searchTerm, searchTaskQuery } = useTodoContext();
  console.log("🚀 ~ SearchBar");
  // RENDER
  return (
    <View style={s.container}>
      <SearchIcon style={s.icon} />
      <TextInput
        inputMode="search"
        value={searchTerm}
        onChangeText={(value) => searchTaskQuery(value)}
        placeholder="Search ( / )"
        placeholderTextColor={COLOR.mutedText}
        returnKeyLabel="Search"
        enablesReturnKeyAutomatically
        style={s.input}
      />
    </View>
  );
};

export default React.memo(SearchBar);
