import { StyleSheet } from "react-native";

export const flexStyles = StyleSheet.create({
  flexCenterCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  flexRowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexRowCenterBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexRowStartBetween: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});
