import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BlogContext from "../context/BlogContext";

const CreateScreen = () => {
  const { navigate } = useNavigation();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { state, dispatch } = useContext(BlogContext);

  const saveBlogPost = () => {
    dispatch({
      type: "ADD_POST",
      payload: { id: Math.floor(Math.random() * 99999), title, content },
    });
    navigate("Index");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          value={title}
          onChangeText={(Text) => setTitle(Text)}
          style={styles.input}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          value={content}
          onChangeText={(Text) => setContent(Text)}
          style={styles.input}
        />
      </View>
      <Button
        title="Save"
        onPress={saveBlogPost}
        style={styles.button}
        disabled={!content.length || !title.length}
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
    width: 100,
  },
});

export default CreateScreen;
