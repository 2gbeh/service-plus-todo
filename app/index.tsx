import { StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex.styles";
import {
  useTodo,
  SearchBar,
  Notifications,
  TodoList,
  Footer,
} from "@/features/todo";

export default function HomeScreen() {
  const { todos } = useTodo();
  console.log("🚀 ~ HomeScreen", todos);
  // RENDER
  return (
    <SafeAreaView style={s.container}>
      {/* HEADER */}
      <View style={s.header}>
        <Image source={require("@/assets/images/icon.png")} style={s.logo} />
        <SearchBar />
        <Notifications />
      </View>
      {/* MAIN */}
      <TodoList data={todos} />
      {/* FOOTER */}
      <Footer />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
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
