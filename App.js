import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BlogProvider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CeateScreen";
import EditScreen from "./src/screens/EditScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={{ title: "Blogs" }}
          />
          <Stack.Screen name="Show" component={ShowScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
};

export default App;
