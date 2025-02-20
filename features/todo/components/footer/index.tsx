import { View, TextInput } from "react-native";
//
import { MoodOutlineIcon, SendOutlineIcon } from "@/constants/ICON";
import { footerStyles as s } from "./styles";

type PropsType = {};

const Footer: React.FC<PropsType> = () => {
  console.log("🚀 ~ Footer");
  // RENDER
  return (
    <View style={s.container}>
      <View style={s.wrapper}>
        <MoodOutlineIcon style={s.footerIcon} />
        <TextInput
          style={s.input}
          placeholder="Add task"
          placeholderTextColor="#888"
        />
        <SendOutlineIcon style={s.footerIconRight} />
      </View>
    </View>
  );
};

export default React.memo(Footer);
