import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../assets/images/mountain.png")}
        style={styles.image}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Log in</Text>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            // onChangeText={(newText) => setText(newText)}
            // defaultValue={text}
          />
          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              // onChangeText={(newText) => setText(newText)}
              // defaultValue={text}
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 16, top: 16 }}
              // onPress={onShow}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonShow}>Show</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            // onPress={handleSubmit}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.changePageBtn}
            // onPress={() => navigation.navigate("Login")}
            activeOpacity={0.7}
          >
            <Text style={styles.changePageText}>
              Haven't an account? Registration
            </Text>
          </TouchableOpacity>
          <View style={styles.line} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    marginTop: "auto",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 8,
    backgroundColor: "#FFFFFF",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  title: {
    marginBottom: 33,
    // fontFamily: "Roboto-Medium",
    // fontSize: 30,
    // lineHeight: 1.2,
    // color: "#212121",
  },
  input: {
    marginBottom: 16,
    minWidth: "100%",
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    // fontFamily: "Roboto-Regular",
    // fontSize: 16,
    // lineHeight: 1.2,
    // color: "#BDBDBD",
  },
  buttonShow: {
    // fontFamily: "Roboto-Regular",
    // fontSize: 16,
    // lineHeight: 1.2,
    // color: "#1B4371",
  },
  button: {
    alignItems: "center",
    width: "100%",
    minHeight: 51,
    marginTop: 43,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    color: "#FFFFFF",
    // fontFamily: "Roboto-Regular",
    // fontWeight: "400",
    // fontSize: 16,
    // lineHeight: 1.2,
  },
  changePageBtn: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  changePageText: {
    // color: "#1B4371",
    // fontFamily: "Roboto-Regular",
    // fontSize: 16,
    // lineHeight: 1.2,
  },
  line: {
    width: 134,
    marginTop: 66,
    borderBottomColor: "#212121",
    borderBottomWidth: 5,
    // justifyContent: "center",
    // borderBottomStartRadius: 10,
    // borderBottomEndRadius: 10,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
  },
});

export default LoginScreen;
