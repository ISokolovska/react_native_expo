import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const RegistrationScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Registration</Text>
      <View
        style={styles.container}
        // style={{
        //   flex: 1,
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
      >
        <TextInput
          style={styles.input}
          placeholder="Login"
          // onChangeText={(newText) => setText(newText)}
          // defaultValue={text}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          // onChangeText={(newText) => setText(newText)}
          // defaultValue={text}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          // onChangeText={(newText) => setText(newText)}
          // defaultValue={text}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    maxHeight: 549,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 1.2,
    color: "#212121",
  },
  input: {
    minWidth: "100%",
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,

    // fontFamily: "Roboto",
    // fontStyle: normal,
    // fontWeight: 400,
    // fontSize: 16,
    // lineHeight: 1.2,
    // color: "#BDBDBD",
  },
});

export default RegistrationScreen;
