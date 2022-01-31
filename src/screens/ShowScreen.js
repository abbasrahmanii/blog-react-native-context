import React, { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import BlogContext from "../context/BlogContext";

const ShowScreen = () => {
  const {
    params: { id },
  } = useRoute();
  const navigation = useNavigation();
  const { state, dispatch } = useContext(BlogContext);
  const blogById = state.find((blog) => blog.id === id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Edit", { id: blogById.id })}
        >
          <Feather name="edit" color="#4781ff" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogById.title}</Text>
      <Text style={styles.content}>{blogById.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: "#383838",
    borderWidth: 1,
    paddingVertical: 25,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textDecorationStyle: "solid",
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
  },
});

export default ShowScreen;
