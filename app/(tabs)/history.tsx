import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Entry = {
  id: number;
  date: string;
  calories: number;
  protein: number;
  water: number;
};

export default function HistoryScreen() {
  const navigation = useNavigation();
  const [entries, setEntries] = useState<Entry[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({ tabBarStyle: { display: "none" } });
  }, [navigation]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/tracker/history"
        );
        const data = await response.json();
        setEntries(data);
      } catch (error) {
        console.error("Error fetching history", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={22} color="#fff" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>History</Text>

        {/* spacer to keep title centered */}
        <View style={styles.headerSpacer} />
      </View>

      <FlatList
        data={entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.date}>
              {new Date(item.date + "T00:00:00").toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </Text>
            <Text style={styles.text}>Calories: {item.calories}</Text>
            <Text style={styles.text}>Protein: {item.protein}</Text>
            <Text style={styles.text}>Water: {item.water} oz</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  card: {
    backgroundColor: "#111",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  date: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 6,
  },
  text: {
    color: "#ccc",
    fontSize: 14,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    top: 50,
    marginBottom: 80,
  },
  title: {
    color: "#FF3C3C",
    fontSize: 22,
    fontFamily: "Poppins-Bold",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#222",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 4,
    fontFamily: "Poppins-Medium",
  },
  headerSpacer: {
    width: 90,
  },
});
