import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const NestedScreen = createStackNavigator();

const PostsScreen = ({ navigation }) => {
  const handleLogout = () => {};
  return (
    <NestedScreen.Navigator
      initialRouteName="Default"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          color: "#212121",
        },

        headerStyle: {
          backgroundColor: "#FFFFFF",
          borderBottomWidth: 1,
          borderBottomColor: "#E8E8E8",
        },
      }}
    >
      <NestedScreen.Screen
        name="Default"
        options={{
          title: "Posts",
          headerLeft: () => {},
          headerRight: () => (
            <TouchableOpacity onPress={handleLogout}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            paddingRight: 10,
          },
        }}
      />
      <NestedScreen.Screen
        name="Comments"
        options={{
          title: "Comments",
          tabBarStyle: { display: "none" },
          headerLeft: ({ focused, size, color }) => (
            <TouchableOpacity onPress={() => {}}>
              <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 16,
          },
        }}
      />
      <NestedScreen.Screen
        name="Map"
        options={{
          title: "Map",
          headerLeft: ({ focused, size, color }) => (
            <TouchableOpacity onPress={() => {}}>
              <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 16,
          },
        }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
