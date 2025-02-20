import { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  Text,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import {
  SearchIcon,
  NotificationsIcon,
  DeleteOutlineIcon,
} from "@/constants/ICON";
import fakeTodos from "@/data/fakeTodos.json";

interface TodoEntity {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [todos, setTodos] = useState<TodoEntity[] | undefined>(fakeTodos);
  async function getTodosQuery() {
    const url = process.env.EXPO_PUBLIC_API_URL + "/todos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    // getTodosQuery();
  }, []);
  console.log("🚀 ~ HomeScreen", todos);
  // RENDER
  return (
    <SafeAreaView style={s.container}>
      {/* HEADER */}
      <View style={s.appBar}>
        {/* LOGO */}
        <Image source={require("@/assets/icon.png")} style={s.logo} />
        {/* SEARCH */}
        <View style={{ flex: 1 }}>
          <SearchIcon style={s.searchBarIcon} color="#999" />
          <TextInput
            style={s.searchBarInput}
            placeholder="Search ( / )"
            placeholderTextColor="#888"
          />
        </View>
        {/* NOTIFICATIONS */}
        <View style={s.notificationsContainer}>
          <View>
            <NotificationsIcon />
            <View style={s.notificationsIndicator} />
          </View>
        </View>
      </View>
      {/* MAIN */}
      <FlatList
        data={todos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={s.listItem}>
            <Text>{item.title}</Text>
            <DeleteOutlineIcon width={18} color="#e11" />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={s.listItemSeparator} />}
        contentContainerStyle={s.listContainer}
      />
      {/* FOOTER */}
      <View style={s.footer}>
        <TextInput
          style={s.searchBarInput}
          placeholder="Search ( / )"
          placeholderTextColor="#888"
        />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    flex: 1,
  },
  footer: {
    backgroundColor: "red",
    padding: 16,
  },
  appBar: {
    backgroundColor: "black",
    padding: 16,
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
  listContainer: {
    paddingHorizontal: 16,
  },
  listItem: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listItemSeparator: {
    borderColor: "#ddd",
    borderWidth: 1,
  },
});
