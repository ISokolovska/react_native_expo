import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: windowHeight,
    width: windowWidth - 16 * 2,
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../assets/images/mountain.png")}
        style={styles.image}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.containerReg}
        >
          <View
            style={{
              ...styles.form,
              paddingBottom:
                !isShowKeyboard && dimensions.width < dimensions.height
                  ? 100
                  : 32,
            }}
          >
            <Text style={styles.title}>Registration</Text>
            <TextInput
              style={styles.input}
              placeholder="Login"
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              // onChangeText={(newText) => setText(newText)}
              // defaultValue={text}
            />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              // onChangeText={(newText) => setText(newText)}
              // defaultValue={text}
            />
            <View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
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
              <Text style={styles.buttonText}>Registration</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.changePageBtn}
              // onPress={() => navigation.navigate("Login")}
              activeOpacity={0.7}
            >
              <Text style={styles.changePageText}>
                Already have an account? Log in
              </Text>
            </TouchableOpacity>
            <View style={styles.line} />
          </View>
        </KeyboardAvoidingView>
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
    paddingTop: 92,
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
  containerReg: {},
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

export default RegistrationScreen;
