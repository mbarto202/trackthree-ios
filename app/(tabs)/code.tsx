import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CodeScreen() {
  const [code, setCode] = useState("");
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ tabBarStyle: { display: "none" } });
  }, [navigation]);

  const handleSave = async () => {
    const formatted = code.trim().toUpperCase();
    if (!formatted) return;

    try {
      const res = await fetch(
        `http://localhost:8080/api/tracker/validate?clientCode=${formatted}`,
      );

      if (!res.ok) {
        Alert.alert(
          "Invalid Code",
          "Please check your client code and try again.",
        );
        return;
      }

      // Only save AFTER validation
      await AsyncStorage.setItem("clientCode", formatted);
      router.replace("/"); // go to Home
    } catch (err) {
      Alert.alert("Error", "Could not validate code. Try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Client Code</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. TT-H1Y4"
        placeholderTextColor="#777"
        value={code}
        onChangeText={setCode}
        autoCorrect={false}
        autoCapitalize="characters"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/")}>
        <Text style={styles.skipText}>Proceed without client code</Text>
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
  skipText: {
    color: "#FF3C3C",
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
});
