import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CodeScreen() {
  const [code, setCode] = useState("");

  const handleSave = async () => {
    if (!code.trim()) return;

    await AsyncStorage.setItem("clientCode", code.trim().toUpperCase());
    router.replace("/"); // go to Home
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Client Code</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. TT-7K3P9D"
        placeholderTextColor="#777"
        value={code}
        onChangeText={setCode}
        autoCapitalize="characters"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "Poppins-Bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF3C3C",
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
  },
});
