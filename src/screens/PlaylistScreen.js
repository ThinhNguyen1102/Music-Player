import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PlaylistList from "./PlaylistList";
import PlaylistDetail from "./PlaylistDetail";
import NewPlaylist from "./NewPlaylist";

const Stack = createNativeStackNavigator();

const PlaylistScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlaylistList"
        component={PlaylistList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlaylistDetail"
        component={PlaylistDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPlaylist"
        component={NewPlaylist}
        options={{ headerShown: false, presentation: "transparentModal" }}
      />
    </Stack.Navigator>
  );
};

export default PlaylistScreen;
