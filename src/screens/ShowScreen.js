import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import BlogContext from "../context/BlogContext";

const ShowScreen = () => {
  const {
    params: { id },
  } = useRoute();
  const { navigate } = useNavigation();
  const { state, dispatch } = useContext(BlogContext);
  const blogById = state.find((blog) => blog.id === id);

  return (
    <View style={styles.container}>
      <View style={styles.blog}>
        <Text style={styles.title}>{blogById.title}</Text>
        <Text style={styles.content}>{blogById.content}</Text>
      </View>
      <TouchableOpacity onPress={() => navigate("Edit", { id: blogById.id })}>
        <Feather name="edit" style={styles.icon} />
      </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  blog: {},
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textDecorationStyle: "solid",
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
  },
  icon: {
    fontSize: 35,
  },
});

export default ShowScreen;
