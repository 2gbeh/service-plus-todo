import React from "react";
import { View, TextInput, Pressable, ActivityIndicator } from "react-native";
//
import { MoodOutlineIcon, SendIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/COLOR";
//
import { useFooter } from "./hook";
import { footerStyles as s } from "./styles";

type PropsType = {};

const Footer: React.FC<PropsType> = () => {
  const { task, setTask, handleSubmit, creating } = useFooter();
  console.log("🚀 ~ Footer");
  // RENDER
  return (
    <View style={s.static.container}>
      <View style={s.static.wrapper}>
        <MoodOutlineIcon style={s.icon().transform} />
        <TextInput
          inputMode="text"
          value={task}
          onChangeText={(value) => setTask(value)}
          placeholder="Enter task"
          placeholderTextColor={COLOR.mutedText}
          editable={!creating}
          returnKeyLabel="Add"
          enablesReturnKeyAutomatically
          style={s.static.input}
        />
      </View>
      <Pressable onPress={handleSubmit}>
        {creating ? <ActivityIndicator /> : <SendIcon color={COLOR.white} />}
      </Pressable>
    </View>
  );
};

export default React.memo(Footer);
