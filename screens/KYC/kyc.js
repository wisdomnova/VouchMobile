import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const KYCVerificationScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>KYC Verification</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/1.jpg" }}
          style={styles.profileImage}
        />
        <Text style={styles.greeting}>
          Good Morning, <Text style={styles.userName}>Mary</Text>
        </Text>
      </View>

      {/* KYC Options */}
      <View style={styles.kycContainer}>
        <KYCItem
          label="Bvn"
          action="Add+"
          onPress={() => navigation.navigate("BVNScreen")}
        />
        <KYCItem
          label="NIN"
          action="12*******90"
          onPress={() => navigation.navigate("NINScreen")}
        />

        <KYCItem
          label="Email Address"
          action="Add+"
          onPress={() => navigation.navigate("EmailScreen")}
        />
      </View>

      {/* Bottom Navigation (Mock) */}
      {/* <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={28} color="black" />
        <Ionicons name="document-text-outline" size={28} color="black" />
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/1.jpg" }}
          style={styles.navProfileImage}
        />
      </View> */}
    </View>
  );
};

// Reusable KYC Item Component
const KYCItem = ({ label, action, isMasked, onPress }) => {
  return (
    <TouchableOpacity style={styles.kycItem} onPress={onPress}>
      <Text style={styles.kycLabel}>{label}</Text>
      <Text style={styles.kycAction}>{action}</Text>
    </TouchableOpacity>
  );
};

export default KYCVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FFF5",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userName: {
    color: "green",
  },
  kycContainer: {
    backgroundColor: "#F9FFF5",
  },
  kycItem: {
    backgroundColor: "#E8F9EC",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  kycLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  kycAction: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navProfileImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
});
