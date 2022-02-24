import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Screen from "../components/Screen";

export const HomeScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.navigation}>
          <Text>Navigation</Text>
        </View>
        <View style={styles.body}>
          <Text>Home Screen</Text>
        </View>
        <Text>Footer</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  navigation: {
    flex: 2,
    backgroundColor: "red",
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  footer: {
    flex: 1,
    backgroundColor: "cyan",
  },
});
