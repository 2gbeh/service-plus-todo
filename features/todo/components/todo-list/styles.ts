import { StyleSheet } from "react-native";
import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex.styles";

export const todoListStyles = {
  _: {},
  static: StyleSheet.create({
    container: {
      backgroundColor: COLOR.offWhite,
      padding: 16,
    },
    cardWrapper: {
      flex: 1,
      rowGap: 4,
    },
    title: {
      color: COLOR.black,
      fontWeight: 600,
      fontSize: 16,
    },
    subtitle: {
      color: COLOR.subText,
      fontSize: 14,
    },
    separator: {
      marginVertical: 8,
    },
  }),
  card: (pending?: boolean) =>
    StyleSheet.create({
      transform: {
        backgroundColor: COLOR.white,
        borderColor: COLOR.border,
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        ...flexStyles.flexRowStartBetween,
        columnGap: 8,
      },
    }),
};
