import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BVNSuccessScreen = () => {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
          
      <Text style={styles.successMessage}>BVN added successfully</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("KYCVerification")}
      >
        <Text style={styles.backButtonText}>Back to KYC Verification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BVNSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  successMessage: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#12342D",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: "center",
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
