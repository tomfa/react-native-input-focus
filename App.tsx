import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useInputFocus } from "./hooks";

export default function App() {
  const { focus, setRef } = useInputFocus();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Regular text inputs</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        ref={setRef("name")}
        onSubmitEditing={() => focus("address")}
      />
      <TextInput
        placeholder="Address"
        style={styles.input}
        ref={setRef("address")}
        onSubmitEditing={() => focus("name")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bebec3",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  header: {
    fontSize: 18,
    marginBottom: 8,
  },
});
