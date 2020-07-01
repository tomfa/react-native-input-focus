# react-native-input-focus

> Hook for simplifying React Native TextInput Focus

[Demo: tomfa.github.io/react-native-input-focus](https://tomfa.github.io/react-native-input-focus/)

| Browser | App |
| -------- | ---- |
| ![browser](https://user-images.githubusercontent.com/1502702/86298652-7c511f80-bbfe-11ea-89b5-57f15ed32d06.gif) | ![app](https://user-images.githubusercontent.com/1502702/86298668-8a06a500-bbfe-11ea-9ce1-ae99cd0e666c.gif) |


## Usage
```tsx
const { focus, setRef } = useInputFocus();
return (
  <TextInput
    ref={setRef("name")}
    onSubmitEditing={() => focus("address")}
  />
  <TextInput
    ref={setRef("address")}
    onSubmitEditing={() => focus("name")}
  />
)
```

## Code
- Hook: [hooks.ts](https://github.com/tomfa/react-native-input-focus/blob/master/hooks.ts)
- Example use: [Inputs.tsx](https://github.com/tomfa/react-native-input-focus/blob/master/Inputs.tsx)

## Examples

### onSubmitEditing not triggering
For some keyboardTypes the phone will assume that returnKey intends a line shift, and the TextInput will not blur. This causes onSubmitEditing not to trigger.
In these cases, you can set `blurOnSubmit`.

```tsx
<TextInput
  ref={setRef("email")}
  keyboardType="ascii-capable"
  blurOnSubmit={true}
  onSubmitEditing={() => focus("phoneNumber")}
/>
```

_This should not be done by default, as it can cause a glitchy keyboard UI on submit._

### AutoFocus on render
`TextInput` has `autoFocus` parameter, which activates on mount. In some cases, this won't trigger since the view is mounted in the background, before being visible. You can fix this with use of useEffect.
```tsx
useEffect(() => focus("name"), []);
return (
  <TextInput
    ref={setRef("name")}
    autoFocus {/* might not work */}
  />
)
```

### Autofocus when maxLength reached
For inputs such as phone numbers or credit cards, you might want to autofocus the next input once the input value becomes valid. To do this, simply call `focus` whenever appropriate, from anywhere in the component.
```tsx
<TextInput
  ref={setRef("phoneNumber")}
  onSubmitEditing={() => focus("email")}
  maxLength={9}
  onValueChange={txt => txt.length === 9 && focus("email")}
/>
<TextInput
  ref={setRef("email")}
  onSubmitEditing={() => focus("phoneNumber")}
/>
```

### iOS `keyboardType="phone-pad"`
This keyboardType does not trigger onSubmitEditing. You'll have to rely on other mechanisms, such as `onValueChange`.
```tsx
<TextInput
  ref={setRef("phoneNumber")}
  keyboardType="phone-pad"
  maxLength={9}
  onValueChange={txt => txt.length === 9 && focus("email")}
/>
<TextInput
  ref={setRef("email")}
  onSubmitEditing={() => focus("phoneNumber")}
/>
```
