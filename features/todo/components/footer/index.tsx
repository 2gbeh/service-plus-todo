import React, { useEffect, useState } from "react";
import { View, TextInput, Pressable } from "react-native";
//
import { useTodoContext } from "../TodoContext";
import { MoodOutlineIcon, SendIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/COLOR";
import { footerStyles as s } from "./styles";

type PropsType = {};

const Footer: React.FC<PropsType> = () => {
  const { createTaskMutation, created } = useTodoContext();
  const [task, setTask] = useState<string | undefined>();
  function handleSubmit() {
    if (task && task.length >= 3) createTaskMutation(task);
  }
  useEffect(() => {
    if (created) setTask("");
  }, [created]);
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
          returnKeyLabel="Add"
          enablesReturnKeyAutomatically
          multiline
          style={s.static.input}
        />
      </View>
      <Pressable onPress={handleSubmit}>
        <SendIcon color={COLOR.white} />
      </Pressable>
    </View>
  );
};

export default React.memo(Footer);
