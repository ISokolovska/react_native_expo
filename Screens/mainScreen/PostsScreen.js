import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const PostsScreen = () => {
  return (
    // <NestedScreen.Navigator>
    //   <NestedScreen.Screen
    //     name="DefaultScreen"
    //     component={DefaultScreenPosts}
    //   />
    //   <NestedScreen.Screen name="Comments" component={CommentsScreen} />
    //   <NestedScreen.Screen name="Map" component={MapScreen} />
    // </NestedScreen.Navigator>
    <View>
      <View style={styles.header}>
        <Text>Posts</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 55,
    paddingBottom: 11,
  },
  //   line: {
  //     width: "100%",
  //     paddingTop: 55,
  //     paddingBottom: 11,
  //     borderBottomColor: "#212121",
  //     borderBottomWidth: 1,
  //   },
  button: {},
});

export default PostsScreen;
