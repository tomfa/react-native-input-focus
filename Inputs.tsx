import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { useInputFocus } from "./hooks";

export default function Inputs() {
  const { focus, setRef } = useInputFocus();
  return (
    <>
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
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
});
