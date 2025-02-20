import { StyleSheet } from "react-native";
import { flexStyles } from "@/styles/flex.styles";
import { COLOR } from "@/constants/COLOR";

export const notificationsStyles = StyleSheet.create({
  _: {},
  container: {
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 100,
    width: 40,
    height: 40,
    ...flexStyles.flexCenterCenter,
  },
  wrapper: {},
  indicator: {
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
