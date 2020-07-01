import React from "react";
import { StyleSheet, View } from "react-native";

import Docs from "./Docs";
import Footer from "./Footer";
import Inputs from "./Inputs";
import Intro from "./Intro";

export default function App() {
  return (
    <View style={styles.container}>
      <Intro />
      <Inputs />
      <Docs />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bebec3",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
});
