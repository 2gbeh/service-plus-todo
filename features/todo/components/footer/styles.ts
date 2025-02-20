import { StyleSheet } from "react-native";
import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex.styles";

export const footerStyles = {
  _: {},
  static: StyleSheet.create({
    container: {
      backgroundColor: COLOR.black,
      borderColor: COLOR.border,
      borderTopWidth: 1,
      paddingVertical: 8,
      paddingHorizontal: 16,
      ...flexStyles.flexRowCenterBetween,
      columnGap: 8,
    },
    wrapper: {
      flex: 1,
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
