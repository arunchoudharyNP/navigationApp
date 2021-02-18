import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const InputCom = (props) => {
  const { borderBottom, title, titleStyle,border, design, ...restProps } = props;

  const inputStyle = [
    styles.input,
    borderBottom && { borderBottomWidth: 1, borderColor: "grey" },
    border && { borderWidth: 1, borderColor : "grey"}
  ];

  return (
    <View style={design}>
      {title && <Text style={[{ marginLeft: 25 }, titleStyle]}> {title} </Text>}
      <TextInput
        style={[{ alignSelf: "center" }, inputStyle]}
        {...restProps}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    width: "80%",
  },
});

export default InputCom;
