import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import useLocation from "../hooks/useLocation";

import Screen from "../components/Screen";

const screenWidth = Dimensions.get("screen").width;

export const LandingScreen = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Screen style={styles.container}>
      <View style={styles.navigation} />
      <View style={styles.body}>
        <Image
          source={require("../images/delivery_icon.png")}
          style={styles.deliveryIcon}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your Delivery Address</Text>
        </View>
        <Text style={styles.addressText}>{location}</Text>
      </View>
      <View style={styles.footer} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(242,242,242,1)",
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  deliveryIcon: {
    width: 120,
    height: 120,
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor: "red",
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  addressTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#7D7D7D",
  },
  addressText: {
    fontSize: 20,
    fontWeight: "200",
    color: "#4f4f4f",
  },
  footer: {
    flex: 1,
  },
});
