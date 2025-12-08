// app/(tabs)/history.tsx
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const HistoryScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  }, [navigation]);
  // Add back btn to return to home screen
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
};

export default HistoryScreen;
