import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

import MainScreen from "./MainScreen";
import CustomDrawer from "../components/CustomDrawer";
import PlaylistScreen from "./PlaylistScreen";
import AllSongScreen from "./AllSongScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Drawer = createDrawerNavigator();

const SideBar = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#dee2e6",
        drawerActiveTintColor: "#4A69BD",
        drawerInactiveTintColor: "#868e96",
        drawerLabelStyle: {
          fontSize: 14,
          fontWeight: "normal",
        },
      }}
    >
      <Drawer.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerStyle: { backgroundColor: "#F7F1E3" },
          headerTitle: "",
          drawerIcon: ({ focused }) => {
            return (
              <Ionicons
                name="md-home-sharp"
                size={22}
                color={focused ? "#4A69BD" : "#868e96"}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Playlist"
        component={PlaylistScreen}
        options={{
          headerStyle: { backgroundColor: "#F7F1E3" },
          headerTitle: "",
          drawerIcon: ({ focused }) => {
            return (
              <Ionicons
                name="albums"
                size={22}
                color={focused ? "#4A69BD" : "#868e96"}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="AllSong"
        component={AllSongScreen}
        options={{
          headerStyle: { backgroundColor: "#F7F1E3" },
          headerTitle: "",
          drawerIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="featured-play-list"
                size={22}
                color={focused ? "#4A69BD" : "#868e96"}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default SideBar;
