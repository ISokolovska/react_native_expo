import * as React from "react";
// import PostsScreen from "./Screens/PostsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import useCachedResources from "./helpers/fonts";

const AuthStack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
  // <View style={styles.container}>
  {
    /* <RegistrationScreen /> */
  }
  {
    /* <LoginScreen /> */
  }
  {
    /* <PostsScreen /> */
  }
  {
    /* <CreatePostsScreen /> */
  }
  {
    /* <CommentsScreen /> */
  }
  {
    /* <ProfileScreen /> */
  }
  {
    /* <MapScreen /> */
  }
  {
    /* <Home /> */
  }
  // </View>
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
