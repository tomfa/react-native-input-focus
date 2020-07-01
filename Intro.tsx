import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Intro() {
  return (
    <>
      <Text style={styles.header}>React Native input autofocus</Text>
      <Text style={styles.paragraph}>
        The inputs will focus each other on submit.{" "}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    margin: 20,
  },
  paragraph: {
    marginBottom: 18,
  },
});
