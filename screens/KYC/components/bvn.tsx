import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons"; // For icons
import { useNavigation } from "@react-navigation/native";

const BVNScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* User Info */}
        <View style={styles.userInfo}>
          <Image
            source={{ uri: "https://via.placeholder.com/40" }} // Replace with real image
            style={styles.profileImage}
          />
          <Text style={styles.greeting}>
            Good Morning, <Text style={styles.userName}>Mary</Text>
          </Text>
        </View>

        {/* Notification Icon */}
        <Feather name="bell" size={24} color="black" />
      </View>

      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* KYC Verification Title */}
      <Text style={styles.kycTitle}>KYC Verification</Text>

      {/* BVN Input Section */}
      <Text style={styles.bvnLabel}>Add Your BVN</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your BVN"
        keyboardType="numeric"
        placeholderTextColor="#A0A0A0"
      />

      {/* Verify Button */}
      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => navigation.navigate("BVNSuccessScreen")}
      >
        <Text style={styles.verifyText}>Verify BVN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BVNScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FCF8",
    paddingHorizontal: 24,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  userName: {
    color: "#228B22", // Green color for name
  },
  backButton: {
    marginBottom: 10,
  },
  kycTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D3B30",
    marginBottom: 20,
  },
  bvnLabel: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#EAEAEA",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    fontSize: 16,
    textAlign: "center",
  },
  verifyButton: {
    backgroundColor: "#12342D",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  verifyText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
