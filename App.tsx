import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import KYCVerificationScreen from "./screens/KYC/kyc";
import BVNScreen from "./screens/KYC/components/bvn";
import NINScreen from "./screens/KYC/components/nin";
import EmailScreen from "./screens/KYC/components/email";
import BVNSuccessScreen from "./screens/KYC/components/bvnSuccess";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="KYCVerification">
        <Stack.Screen
          name="KYCVerification"
          component={KYCVerificationScreen}
        />
        <Stack.Screen name="BVNScreen" component={BVNScreen} />
        <Stack.Screen name="NINScreen" component={NINScreen} />
        <Stack.Screen name="EmailScreen" component={EmailScreen} />
        <Stack.Screen name="BVNSuccessScreen" component={BVNSuccessScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
