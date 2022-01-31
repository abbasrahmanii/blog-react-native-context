import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import BlogContext from "../context/BlogContext";

const EditScreen = () => {
  const { navigate } = useNavigation();
  const {
    params: { id },
  } = useRoute();
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const { state, dispatch } = useContext(BlogContext);

  const blogPost = state.find((blog) => blog.id === id);

  const editBlogPost = () => {
    dispatch({
      type: "EDIT_POST",
      payload: { id, title: newTitle, content: newContent },
    });
    navigate("Index");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Enter New Title:</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          value={newTitle}
          onChangeText={(Text) => setNewTitle(Text)}
          placeholder={`Previous title: ${blogPost.title}`}
          style={styles.input}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Enter New Content:</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          value={newContent}
          onChangeText={(Text) => setNewContent(Text)}
          placeholder={`Previous content: ${blogPost.content}`}
          style={styles.input}
        />
      </View>
      <Button
        title="Save"
        onPress={editBlogPost}
        style={styles.button}
        disabled={!newTitle.length || !newContent.length}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingVertical: 25,
    paddingHorizontal: 5,
  },
  form: {
    marginBottom: 25,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  button: {
    marginTop: 30,
  },
});

export default EditScreen;
