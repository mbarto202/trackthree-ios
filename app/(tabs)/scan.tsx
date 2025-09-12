// app/(tabs)/scan.tsx
import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const ScanScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  }, [navigation]);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    Alert.alert("QR Code Scanned", `Type: ${type}\nData: ${data}`);
    navigation.goBack();
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No access to camera</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.cancelButton}>
        <Button
          title="Cancel"
          onPress={() => navigation.goBack()}
          color="#FF3C3C"
        />
      </View>
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
  cancelButton: {
    marginBottom: 50,
    alignSelf: "center",
    width: 200,
  },
});
