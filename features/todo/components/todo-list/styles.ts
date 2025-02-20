import { StyleSheet } from "react-native";
import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex.styles";

export const todoListStyles = {
  _: {},
  static: StyleSheet.create({
    listContainer: {
      backgroundColor: COLOR.offWhite,
      padding: 16,
    },
    listItem: {
      backgroundColor: COLOR.white,
      borderColor: COLOR.border,
      borderWidth: 1,
      borderRadius: 8,
      padding: 16,
      ...flexStyles.flexRowStartBetween,
      columnGap: 16,
    },
    listItemSeparator: {
      marginVertical: 8,
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
