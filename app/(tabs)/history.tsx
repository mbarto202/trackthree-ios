// app/(tabs)/history.tsx
import { Text, View } from "react-native";

export default function HistoryScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff" }}>History Page</Text>
    </View>
  );
}
