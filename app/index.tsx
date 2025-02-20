import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import { TodoContextProvider } from "@/context/TodoContext";
import {
  todoStyles as s,
  SearchBar,
  Notifications,
  Filters,
  TodoList,
  Footer,
} from "@/features/todo";

export default function HomeScreen() {
  console.log("🚀 ~ HomeScreen");
  // RENDER
  return (
    <TodoContextProvider>
      <SafeAreaView style={s.container}>
        {/* HEADER */}
        <View style={s.header}>
          <Image source={require("@/assets/images/icon.png")} style={s.logo} />
          <SearchBar />
          <Notifications />
        </View>
        {/* NAV */}
        <Filters />
        {/* MAIN */}
        <TodoList />
        {/* FOOTER */}
        <Footer />
      </SafeAreaView>
    </TodoContextProvider>
  );
}
