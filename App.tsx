import React from "react";
import { StyleSheet, Text, View, TextInput, Linking } from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter";

import { useInputFocus } from "./hooks";

const HOOK_CODE = `
type InputLookup = { [key: string]: TextInput };

export const useInputFocus = () => {
  const refs = useRef<InputLookup>({});
  const [
    currentFocus, 
    setCurrentFocus
  ] = useState<string>("");
  const focus = useCallback(
    (key: string) => {
      if (refs.current[currentFocus]) {
        refs.current[currentFocus].blur();
      }
      if (refs.current[key]) {
        refs.current[key].focus();
      }
    },
    [currentFocus]
  );
  const setRef = (name: string) 
      => (input: TextInput) 
      => {
    refs.current[name] = input;
  };
  return { focus, setRef };
}; 
`;

const USE_HOOK_CODE = `
const { focus, setRef } = useInputFocus();
return (
  <TextInput
    ref={setRef("name")}
    {/* Blur needed for multiline keyboard */}
    blurOnSubmit={false} 
    onSubmitEditing={() => focus("address")}
  />
  <TextInput
    ref={setRef("address")}
    onSubmitEditing={() => focus("name")}
  />
)
`;

export default function App() {
  const { focus, setRef } = useInputFocus();
  const onGithubLinkPress = () =>
    Linking.openURL("http://github.com/tomfa/react-native-input-focus");
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>React Native input autofocus</Text>
      <Text style={styles.paragraph}>
        The inputs will focus each other on submit.{" "}
      </Text>
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

      <Text style={styles.h2}>Usage</Text>
      <SyntaxHighlighter language="tsx" highlighter={"prism" || "hljs"}>
        {USE_HOOK_CODE}
      </SyntaxHighlighter>
      <Text style={styles.h2}>Custom hook</Text>
      <SyntaxHighlighter language="tsx" highlighter={"prism" || "hljs"}>
        {HOOK_CODE}
      </SyntaxHighlighter>
      <Text style={[styles.footer, styles.link]} onPress={onGithubLinkPress}>
        github.com/tomfa/react-native-input-focus
      </Text>
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
  input: {
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  h1: {
    fontSize: 36,
    margin: 20,
  },
  h2: {
    fontSize: 18,
    margin: 8,
    marginTop: 18,
  },
  paragraph: {
    marginBottom: 18,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    padding: 8,
    marginBottom: 60
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
