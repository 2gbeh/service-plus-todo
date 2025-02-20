import React from "react";
import { View } from "react-native";
//
import { NotificationsIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/COLOR";
import { notificationsStyles as s } from "./styles";

type PropsType = {};

const Notifications: React.FC<PropsType> = () => {
  console.log("🚀 ~ Notifications");
  // RENDER
  return (
    <View style={s.container}>
      <View style={s.wrapper}>
        <NotificationsIcon color={COLOR.black} />
        <View style={s.indicator} />
      </View>
    </View>
  );
};

export default React.memo(Notifications);
