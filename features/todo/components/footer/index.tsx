import React from "react";
import { View, TextInput } from "react-native";
//
import { MoodOutlineIcon, SendIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/COLOR";
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
          placeholder="Enter task"
          placeholderTextColor={COLOR.mutedText}
        />
      </View>
      <SendIcon color={COLOR.white} />
    </View>
  );
};

export default React.memo(Footer);
