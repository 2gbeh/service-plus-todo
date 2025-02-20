import React, { useEffect, useState } from "react";
import { View, TextInput, Pressable, ActivityIndicator } from "react-native";
//
import { useTodoContext } from "@/context/TodoContext";
import { MoodOutlineIcon, SendIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/COLOR";
import { footerStyles as s } from "./styles";

type PropsType = {};

const Footer: React.FC<PropsType> = () => {
  const { createTaskMutation, creating, created } = useTodoContext();
  const [task, setTask] = useState<string>("");
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
