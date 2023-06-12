import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PlayScreen from "./PlayScreen";
import Home from "./Home";
import SongOption from "./SongOption";
import NewPlaylist from "./NewPlaylist";

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlayScreen"
        component={PlayScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SongOption"
        component={SongOption}
        options={{
          headerShown: false,
          presentation: "transparentModal",
        }}
      />
      <Stack.Screen
        name="NewPlaylistS"
        component={NewPlaylist}
        options={{
          headerShown: false,
          presentation: "transparentModal",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F7F1E3",
  },
});
