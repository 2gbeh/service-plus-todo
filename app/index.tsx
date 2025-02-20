import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import {
  useTodo,
  todoStyles as s,
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
