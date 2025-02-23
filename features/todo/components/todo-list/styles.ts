import { StyleSheet } from "react-native";
import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex.styles";

export const todoListStyles = {
  _: {},
  static: StyleSheet.create({
    container: {
      backgroundColor: COLOR.offWhite,
      paddingHorizontal: 16,
      flex: 1,
    },
    header: {
      marginBottom: 16,
      ...flexStyles.flexRowCenterBetween,
    },
    heading: {
      color: COLOR.black,
      fontWeight: 600,
      fontSize: 16,
    },
    total: {
      color: COLOR.subText,
      fontWeight: 600,
      fontSize: 14,
    },
    title: {
      color: COLOR.black,
      fontWeight: 600,
      fontSize: 16,
    },
    subtitleWrapper: {
      ...flexStyles.flexRowCenter,
      columnGap: 4,
    },
    subtitle: {
      color: COLOR.subText,
      marginTop: -2,
      fontSize: 14,
    },
    rightAction: {
      ...flexStyles.flexCenterCenter,
      paddingHorizontal: 16,
    },
    separator: {
      marginVertical: 8,
    },
    noDataContainer: {
      ...flexStyles.flexCenterCenter,
      flex: 1,
      rowGap: 8,
    },
    noDataText: {
      color: COLOR.subText,
      // fontSize: 16,
    },
  }),
  card: (pending?: boolean) =>
    StyleSheet.create({
      transform: {
        backgroundColor: pending ? "#fef2f2" : COLOR.white,
        borderColor: pending ? "#fca5a5" : COLOR.border,
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        ...flexStyles.flexColStartBetween,
        rowGap: 4,
      },
    }),
};
