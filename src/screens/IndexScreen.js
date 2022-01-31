import React, { useContext, useLayoutEffect } from "react";
import {
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
  const navigation = useNavigation();
  const { state, dispatch } = useContext(BlogContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Feather name="plus" size={30} color="#4781ff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      {state ? (
        <FlatList
          keyExtractor={(state) => state.id}
          data={state}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
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
