import { StyleSheet } from "react-native";
import { flexStyles } from "@/styles/flex.styles";
import { COLOR } from "@/constants/COLOR";

export const footerStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: "black",
    borderColor: "#eee",
    borderTopWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  wrapper: {
    flex: 1,
  },
  input: {
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 100,
    paddingLeft: 40,
    paddingRight: 20,
    height: 40,
  },
  footerIcon: {
    color: "#999",
    position: "absolute",
    top: 8,
    left: 10,
  },
  footerIconRight: {
    color: "#999",
    position: "absolute",
    top: 8,
    right: 10,
  },
});
