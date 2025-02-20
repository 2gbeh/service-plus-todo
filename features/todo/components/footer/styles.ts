import { StyleSheet } from "react-native";
import { COLOR } from "@/constants/COLOR";

export const footerStyles = {
  _: {},
  static: StyleSheet.create({
    container: {
      backgroundColor: COLOR.black,
      borderColor: COLOR.border,
      borderTopWidth: 1,
      paddingVertical: 16,
      paddingHorizontal: 16,
    },
    wrapper: {
      // flex: 1,
    },
    input: {
      backgroundColor: COLOR.white,
      borderColor: COLOR.border,
      borderWidth: 1,
      borderRadius: 100,
      paddingLeft: 40,
      paddingRight: 20,
      height: 40,
    },
  }),
  icon: (right?: boolean) =>
    StyleSheet.create({
      transform: {
        color: COLOR.icon,
        position: "absolute",
        top: 8,
        ...(right ? { right: 10 } : { left: 10 }),
      },
    }),
};
