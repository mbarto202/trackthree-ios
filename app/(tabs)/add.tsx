// app/(tabs)/add.tsx
import { useTracker } from "@/context/TrackerContext";
import { useFocusEffect } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  Alert,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const AddScreen = () => {
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [water, setWater] = useState("");
  const { addCalories, addProtein, addWater } = useTracker();
  const navigation = useNavigation();

  const handleSubmit = async () => {
    const entry = {
      calories: Number(calories),
      protein: Number(protein),
      water: Number(water),
      date: new Date().toISOString().split("T")[0],
    };

    try {
      const res = await fetch("http://localhost:8080/api/tracker/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      });

      if (res.ok) {
        addCalories(entry.calories);
        addProtein(entry.protein);
        addWater(entry.water);
        Alert.alert("Success", "Entry saved and updated.");
        router.back();
      } else {
        Alert.alert("Error", "Failed to save entry.");
      }
    } catch (err) {
      Alert.alert("Network Error", "Could not reach server.");
      console.error(err);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      setCalories("");
      setProtein("");
      setWater("");
    }, [])
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.form}>
          <Text style={styles.label}>Calories (kcal)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 500"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={calories}
            onChangeText={setCalories}
          />

          <Text style={styles.label}>Protein (g)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 30"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={protein}
            onChangeText={setProtein}
          />

          <Text style={styles.label}>Water (oz)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 16"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={water}
            onChangeText={setWater}
          />
        </View>

        {/* Bottom Buttons */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 24,
    justifyContent: "space-between",
  },
  form: {
    flexGrow: 1,
    top: 40,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginTop: 20,
    fontFamily: "Poppins-SemiBold",
  },
  input: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginTop: 8,
    fontFamily: "Poppins-Regular",
  },
  footer: {
    paddingBottom: 30,
    paddingTop: 10,
  },
  submitButton: {
    backgroundColor: "#FF3C3C",
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  cancelButton: {
    backgroundColor: "#444",
    paddingVertical: 16,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
});
