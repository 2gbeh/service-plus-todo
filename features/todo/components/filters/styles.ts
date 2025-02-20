import { StyleSheet } from "react-native";
import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex.styles";

export const filtersStyles = {
  _: {},
  static: StyleSheet.create({
    container: {
      paddingBottom: 16,
      ...flexStyles.flexRowCenterBetween
    },
    tabs: {
      ...flexStyles.flexRowCenter,
      columnGap: 8,
    },
    totaled: {
      color: COLOR.subText,
      fontWeight: 600,
      fontSize: 14,
    },
  }),
  tab: (active?: boolean) =>
    StyleSheet.create({
      transform: {
        backgroundColor: active ? COLOR.black : COLOR.mutedButton,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 100,
      },
    }),
  tabText: (active?: boolean) =>
    StyleSheet.create({
      transform: {
        color: active ? COLOR.white : COLOR.black,
        fontWeight: 600,
        fontSize: 14,
      },
    }),
};
