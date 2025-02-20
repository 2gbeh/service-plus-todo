import { StyleSheet } from "react-native";
import { COLOR } from "@/constants/COLOR";

export const searchBarStyles = StyleSheet.create({
  _: {},
  container: {
    flex: 1,
  },
  icon: {
    color: COLOR.icon,
    position: "absolute",
    top: 8,
    left: 10,
  },
  input: {
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 100,
    paddingLeft: 40,
    paddingRight: 20,
    height: 40,
  },
});
