import { StyleSheet } from "react-native";
import { flexStyles } from "@/styles/flex.styles";
import { COLOR } from "@/constants/COLOR";

export const appBarStyles = StyleSheet.create({
  _: {},
  container: {
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
  searchBarIcon: {
    color: COLOR.icon,
    position: "absolute",
    top: 8,
    left: 10,
  },
  searchBarInput: {
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 100,
    paddingLeft: 40,
    paddingRight: 20,
    height: 40,
  },
  notificationsContainer: {
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 100,
    width: 40,
    height: 40,
    ...flexStyles.flexCenterCenter,
  },
  notificationsIndicator: {
    backgroundColor: "red",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 100,
    width: 10,
    height: 10,
    position: "absolute",
    top: 0,
    right: 0,
  },
});
