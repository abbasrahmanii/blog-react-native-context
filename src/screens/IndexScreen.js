import React, { useContext } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { navigate } = useNavigation();

  const { state, dispatch } = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress={() => navigate("Create")} />
      {state ? (
        <FlatList
          keyExtractor={(state) => state.id}
          data={state}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigate("Show", { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity
                  onPress={() =>
                    dispatch({ type: "DELETE_POST_BY_Id", payload: item.id })
                  }
                >
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 25,
  },
});

export default IndexScreen;
