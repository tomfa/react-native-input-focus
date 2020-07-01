import React from "react";
import { StyleSheet, Text  } from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter";

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

export default function Docs() {
  return (
    <>
      <Text style={styles.h2}>Usage</Text>
      <SyntaxHighlighter language="tsx" highlighter={"prism" || "hljs"}>
        {USE_HOOK_CODE}
      </SyntaxHighlighter>
      <Text style={styles.h2}>Custom hook</Text>
      <SyntaxHighlighter language="tsx" highlighter={"prism" || "hljs"}>
        {HOOK_CODE}
      </SyntaxHighlighter>
    </>
  );
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 18,
    margin: 8,
    marginTop: 18,
  },
});
