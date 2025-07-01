import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack>

      <StatusBar backgroundColor="#000" style="light" />
    </>
  );
};

export default AuthLayout;
