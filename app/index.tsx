import { StyleSheet, Image, View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { format } from "date-fns";
//
import { DeleteOutlineIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex.styles";
// 
import { useTodo, SearchBar, Notifications, Footer } from "@/features/todo";


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
      <FlatList
        data={todos}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={() => (
          <View style={s.nav}>
            <View style={s.tabs}>
              <View style={s.tabActive}>
                <Text style={s.tabActiveText}>All</Text>
              </View>
              <View style={s.tab}>
                <Text style={s.tabText}>Completed</Text>
              </View>
            </View>
            {/* TOTALED */}
            <Text style={{ fontWeight: 600, fontSize: 16, color: "#555" }}>
              Total {todos?.length}
            </Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <View style={s.listItem}>
            <View style={{ flex: 1, rowGap: 4 }}>
              <Text style={{ fontWeight: 600, fontSize: 16 }}>
                {/* {index + 1}.  */}
                {item.title}
              </Text>
              <Text style={{ fontSize: 14, color: "#555" }}>
                Created{" "}
                {[
                  format(new Date(), "h:mm a"),
                  format(new Date(), "h:mm a"),
                  "Yesterday",
                  "Yesterday",
                  "Yesterday",
                ][index] ?? format(new Date(), "M/d/yy")}
              </Text>
            </View>
            <DeleteOutlineIcon width={18} color="#e11" />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={s.listItemSeparator} />}
        contentContainerStyle={s.listContainer}
      />
      {/* FOOTER */}
      <Footer />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: "#fff",
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
  nav: {
    // paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  tab: {
    backgroundColor: "#ddd",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 100,
  },
  tabText: {
    color: "#555",
    fontSize: 14,
  },
  tabActive: {
    backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 100,
  },
  tabActiveText: {
    color: "#fff",
    fontSize: 14,
  },
  listContainer: {
    backgroundColor: "#fafafa",
    padding: 16,
  },
  listItem: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    columnGap: 16,
  },
  listItemSeparator: {
    // borderColor: "#ddd",
    // borderWidth: 1,
    marginVertical: 8,
  },
});
