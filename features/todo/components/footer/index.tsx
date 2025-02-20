import React from "react";
import { View, TextInput } from "react-native";
//
import { MoodOutlineIcon, SendOutlineIcon } from "@/constants/ICON";
import { footerStyles as s } from "./styles";

type PropsType = {};

const Footer: React.FC<PropsType> = () => {
  console.log("🚀 ~ Footer");
  // RENDER
  return (
    <View style={s.static.container}>
      <View style={s.static.wrapper}>
        <MoodOutlineIcon style={s.icon().transform} />
        <TextInput
          style={s.static.input}
          placeholder="Add task"
          placeholderTextColor="#888"
        />
        <SendOutlineIcon style={s.icon(true).transform} />
      </View>
    </View>
  );
};

export default React.memo(Footer);
