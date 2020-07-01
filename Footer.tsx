import React from "react";
import { StyleSheet, Text, Linking } from "react-native";

export default function Footer() {
  const onGithubLinkPress = () =>
    Linking.openURL("http://github.com/tomfa/react-native-input-focus");
  return (
    <Text style={[styles.footer, styles.link]} onPress={onGithubLinkPress}>
      github.com/tomfa/react-native-input-focus
    </Text>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    padding: 8,
    marginBottom: 60,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
