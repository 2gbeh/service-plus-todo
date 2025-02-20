import React from "react";
import { Image, View, TextInput } from "react-native";
//
import { SearchIcon, NotificationsIcon } from "@/constants/ICON";
import { appBarStyles as s } from "./styles";

type PropsType = {};

const AppBar: React.FC<PropsType> = () => {
  console.log("🚀 ~ AppBar");
  // RENDER
  return (
    <View style={s.container}>
      {/* LOGO */}
      <Image source={require("@/assets/images/icon.png")} style={s.logo} />
      {/* SEARCH */}
      <View style={{ flex: 1 }}>
        <SearchIcon style={s.searchBarIcon} />
        <TextInput
          style={s.searchBarInput}
          placeholder="Search ( / )"
          placeholderTextColor="#888"
        />
      </View>
      {/* NOTIFICATIONS */}
      <View style={s.notificationsContainer}>
        <View>
          <NotificationsIcon />
          <View style={s.notificationsIndicator} />
        </View>
      </View>
    </View>
  );
};

export default React.memo(AppBar);
