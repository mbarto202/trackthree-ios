// app/(tabs)/add.tsx
import { useTracker } from "@/context/TrackerContext";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AddScreen = () => {
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [water, setWater] = useState("");

  const { addCalories, addProtein, addWater } = useTracker();

  const handleSubmit = () => {
    addCalories(Number(calories));
    addProtein(Number(protein));
    addWater(Number(water));

    Alert.alert("Submitted", ` ${calories} kcal\n ${protein} g\n ${water} oz`);
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  useFocusEffect(
    useCallback(() => {
      setCalories("");
      setProtein("");
      setWater("");
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Calories</Text>
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  buttonContainer: {
    paddingTop: 20,
  },
  submitButton: {
    backgroundColor: "#FF3C3C",
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
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
