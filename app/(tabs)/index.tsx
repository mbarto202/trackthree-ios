// app/(tabs)/index.tsx
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header Totals */}
      <View style={styles.totalsContainer}>
        <Text style={styles.stat}>
          🔥 Calories: <Text style={styles.value}>1420 kcal</Text>
        </Text>
        <Text style={styles.stat}>
          💪 Protein: <Text style={styles.value}>120 g</Text>
        </Text>
        <Text style={styles.stat}>
          💧 Water: <Text style={styles.value}>48 oz</Text>
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/add")}
        >
          <Text style={styles.buttonText}>Add Manually</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/scan")}
        >
          <Text style={styles.buttonText}>Scan QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 24,
    paddingTop: 80,
    alignItems: "center",
  },
  totalsContainer: {
    marginBottom: 40,
    width: "100%",
  },
  stat: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 12,
    fontFamily: "Poppins-SemiBold",
  },
  value: {
    color: "#FF3C3C", // BartoBuild red
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "#FF3C3C",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 6,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
});
