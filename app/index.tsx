import { StyleSheet, Image, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import { SearchIcon, NotificationsIcon } from "@/constants/ICON";

export default function HomeScreen() {
  console.log("🚀 ~ HomeScreen");
  // RENDER
  return (
    <SafeAreaView style={s.container}>
      <View style={s.appBar}>
        <Image source={require("@/assets/icon.png")} style={s.logo} />
        <View style={{ flex: 1 }}>
          <SearchIcon style={s.searchBarIcon} color="#888" />
          <TextInput
            style={s.searchBarInput}
            placeholder="Search ( / )"
            placeholderTextColor="#888"
          />
        </View>
        <View style={s.notificationsContainer}>
          <View>
            <NotificationsIcon />
            <View style={s.notificationsIndicator} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  appBar: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 16,
  },
  logo: {
    height: 40,
    width: 40,
  },
  searchBarIcon: {
    position: "absolute",
    top: 8,
    left: 10,
  },
  searchBarInput: {
    backgroundColor: "white",
    borderRadius: 100,
    paddingLeft: 40,
    paddingRight: 20,
    height: 40,
  },
  notificationsContainer: {
    backgroundColor: "white",
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
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
