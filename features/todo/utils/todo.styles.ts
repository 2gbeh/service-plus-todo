import { StyleSheet } from "react-native";
import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex.styles";


export const todoStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    flex: 1,
  },
  header: {
    borderColor: COLOR.border,
    borderBottomWidth: 1,
    padding: 16,
    ...flexStyles.flexRowCenterBetween,
    columnGap: 16,
  },
  logo: {
    borderRadius: 8,
    height: 40,
    width: 40,
  },
});

