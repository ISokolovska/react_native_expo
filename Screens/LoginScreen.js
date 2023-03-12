import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: Dimensions.get("window").width - 16 * 2,
    height: Dimensions.get("window").height,
  });
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      const height = Dimensions.get("window").height;
      setDimensions({ width, height });
    };
    const subscription = Dimensions.addEventListener("change", onChange);
    return () => subscription?.remove();
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  // const handleSubmit = async () => {
  //   dispatch(logInUser(state));
  //   keyboardHide();
  // };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
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
                marginBottom: isShowKeyboard ? 20 : "auto",
                // width: dimensions,
              }}
              // style={styles.form}
            >
              <Text style={styles.title}>Log in</Text>

              <TextInput
                style={styles.input}
                placeholder="E-mail"
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                value={state.login}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
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
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
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
                onPress={() => navigation.navigate("Register")}
                activeOpacity={0.7}
              >
                <Text style={styles.changePageText}>
                  Haven't an account? Registration
                </Text>
              </TouchableOpacity>
              <View style={styles.line} />
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    paddingHorizontal: 16,
    // marginHorizontal: 16,
    // paddingLeft: 16,
    // paddingRight: 16,
    paddingTop: 32,
    // paddingBottom: 8,
    backgroundColor: "#FFFFFF",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  title: {
    // marginTop: 32,
    marginBottom: 33,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    minWidth: "100%",
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  buttonShow: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
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
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  changePageBtn: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  changePageText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  line: {
    width: 134,
    marginTop: 66,
    marginBottom: 8,
    borderBottomColor: "#212121",
    borderBottomWidth: 5,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 100,
  },
});

export default LoginScreen;
