// app/(tabs)/index.tsx
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTracker } from "../../context/TrackerContext";

const HomeScreen = () => {
  const { calories, protein, water, resetTracker } = useTracker();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Wrap all content except reset button */}
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.logo}>TrackThree</Text>
          <Text style={styles.tagline}>Ambition, Consistency, Discipline</Text>
        </View>
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
      </View>

      <View style={styles.footerWrapper}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/add")}
          >
            <Text style={styles.buttonText}>Add Manually</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resetContainer}>
          <TouchableOpacity style={styles.resetButton} onPress={resetTracker}>
            <Text style={styles.resetText}>Reset for the Day</Text>
          </TouchableOpacity>
        </View>
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
    maxWidth: 500,
  },

  contentWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 80,
    bottom: 50,
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
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "#FF3C3C",
    paddingVertical: 16,
    borderRadius: 12,
    flex: 1,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
  resetContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#222",
    paddingTop: 20,
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
  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  logo: {
    fontSize: 28,
    color: "#FF3C3C",
    fontFamily: "Poppins-Bold",
  },

  tagline: {
    fontSize: 14,
    color: "#aaa",
    fontFamily: "Poppins-Regular",
    marginTop: 4,
  },

  footerWrapper: {
    width: "100%",
    top: 40,
  },
});
