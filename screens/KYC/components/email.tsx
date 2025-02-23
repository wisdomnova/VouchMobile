import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const EmailScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email Address"
        keyboardType="email-address"
      />
      <Button
        title="Submit"
        onPress={() => {
          /* Handle Email Address submission */
        }}
      />
    </View>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
