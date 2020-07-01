(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{152:function(e,n,t){t(153),e.exports=t(699)},153:function(e,n){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/react-native-input-focus/expo-service-worker.js",{scope:"/react-native-input-focus/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},699:function(e,n,t){"use strict";t.r(n);var r=t(709),a=t(1),u=t.n(a),o=t(3),c=t(4),i=t(21),s=t(100),f=t.n(s);function l(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.a,{style:m.h2},"Usage"),u.a.createElement(f.a,{language:"tsx",highlighter:"prism"},'\nconst { focus, setRef } = useInputFocus();\nreturn (\n  <TextInput\n    ref={setRef("name")}\n    {/* Blur needed for multiline keyboard */}\n    blurOnSubmit={false} \n    onSubmitEditing={() => focus("address")}\n  />\n  <TextInput\n    ref={setRef("address")}\n    onSubmitEditing={() => focus("name")}\n  />\n)\n'),u.a.createElement(i.a,{style:m.h2},"Custom hook"),u.a.createElement(f.a,{language:"tsx",highlighter:"prism"},'\ntype InputLookup = { [key: string]: TextInput };\n\nexport const useInputFocus = () => {\n  const refs = useRef<InputLookup>({});\n  const [\n    currentFocus, \n    setCurrentFocus\n  ] = useState<string>("");\n  const focus = useCallback(\n    (key: string) => {\n      if (refs.current[currentFocus]) {\n        refs.current[currentFocus].blur();\n      }\n      if (refs.current[key]) {\n        refs.current[key].focus();\n      }\n    },\n    [currentFocus]\n  );\n  const setRef = (name: string) \n      => (input: TextInput) \n      => {\n    refs.current[name] = input;\n  };\n  return { focus, setRef };\n}; \n'))}var m=o.a.create({h2:{fontSize:18,margin:8,marginTop:18}}),p=t(74);function g(){return u.a.createElement(i.a,{style:[d.footer,d.link],onPress:function(){return p.a.openURL("http://github.com/tomfa/react-native-input-focus")}},"github.com/tomfa/react-native-input-focus")}var d=o.a.create({footer:{position:"absolute",bottom:0,padding:8,marginBottom:60},link:{color:"blue",textDecorationLine:"underline"}}),b=t(60),h=t(143),E=t.n(h);function k(){var e=function(){var e=Object(a.useRef)({}),n=Object(a.useState)(""),t=E()(n,2),r=t[0];t[1];return{focus:Object(a.useCallback)((function(n){e.current[r]&&e.current[r].blur(),e.current[n]&&e.current[n].focus()}),[r]),setRef:function(n){return function(t){e.current[n]=t}}}}(),n=e.focus,t=e.setRef;return u.a.createElement(u.a.Fragment,null,u.a.createElement(b.a,{ref:t("name"),onSubmitEditing:function(){return n("address")}}),u.a.createElement(b.a,{ref:t("address"),onSubmitEditing:function(){return n("name")}}))}StyleSheet.create({input:{padding:12,backgroundColor:"#fff",marginBottom:8}});function v(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.a,{style:y.header},"React Native input autofocus"),u.a.createElement(i.a,{style:y.paragraph},"The inputs will focus each other on submit."," "))}var y=o.a.create({header:{fontSize:36,margin:20},paragraph:{marginBottom:18}});var x=o.a.create({container:{flex:1,backgroundColor:"#bebec3",alignItems:"center",justifyContent:"center",paddingBottom:100}});Object(r.a)((function(){return u.a.createElement(c.a,{style:x.container},u.a.createElement(v,null),u.a.createElement(k,null),u.a.createElement(l,null),u.a.createElement(g,null))}))}},[[152,1,2]]]);
//# sourceMappingURL=app.48859151.chunk.js.map