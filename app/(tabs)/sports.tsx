import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

export default function Sports() {
  return (
    <View style={styles.container}>
      <Text>sports</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
