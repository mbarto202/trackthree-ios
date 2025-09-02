// app/(tabs)/index.tsx
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTracker } from "../../context/TrackerContext";

const HomeScreen = () => {
  const { calories, protein, water, resetTracker } = useTracker();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Wrap all content except reset button */}
      <View style={styles.contentWrapper}>
        <View style={styles.totalsContainer}>
          <Text style={styles.stat}>
            Calories: <Text style={styles.value}>{calories} kcal</Text>
          </Text>
          <Text style={styles.stat}>
            Protein: <Text style={styles.value}>{protein} g</Text>
          </Text>
          <Text style={styles.stat}>
            Water: <Text style={styles.value}>{water} oz</Text>
          </Text>
        </View>

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

      {/* Reset Button pinned to bottom */}
      <View style={styles.resetContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={resetTracker}>
          <Text style={styles.resetText}>Reset for the Day</Text>
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
    paddingBottom: 40,
    justifyContent: "space-around",
  },

  contentWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
    color: "#FF3C3C",
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
  resetContainer: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  resetButton: {
    backgroundColor: "#444",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  resetText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },
});
