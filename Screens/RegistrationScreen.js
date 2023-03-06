import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
// import { styles } from "../helpers/styles/styles";
// import styles from "../helpers/styles/styles";

const RegistrationScreen = () => {
  return (
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
        placeholder="Логин"
        // onChangeText={(newText) => setText(newText)}
        // defaultValue={text}
      />
      <TextInput
        style={styles.input}
        placeholder="Адрес электронной почты"
        // onChangeText={(newText) => setText(newText)}
        // defaultValue={text}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        // onChangeText={(newText) => setText(newText)}
        // defaultValue={text}
      />
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
    background: "#FFFFFF",
    // borderRadius: 25 25 0 0
    borderTopStartRadius: 25,
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
  },
});

export default RegistrationScreen;
