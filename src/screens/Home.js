import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Playlist from "../components/Playlist";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Navigation from "../components/Navigation";
import MiniPlayer from "../components/MiniPlayer";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <Navigation title={"Home"} />
      <View style={styles.container}>
        <View style={styles.shortcuts}>
          <TouchableOpacity
            style={[styles.shortcutsItem, styles.favorites]}
            onPress={() => {
              navigation.navigate("Favorites");
            }}
          >
            <Ionicons
              name="heart"
              size={20}
              color="#f8f9fa"
              style={styles.icon}
            />
            <Text style={styles.textWhite}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.shortcutsItem, styles.playlists]}
            onPress={() => {
              navigation.navigate("Playlist");
            }}
          >
            <MaterialCommunityIcons
              name="playlist-music"
              size={24}
              color="#f8f9fa"
              style={styles.icon}
            />
            <Text style={styles.textWhite}>Playlists</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.shortcutsItem, styles.queue]}
            onPress={() => {
              navigation.navigate("AllSong");
            }}
          >
            <MaterialIcons
              name="featured-play-list"
              size={18}
              color="#f8f9fa"
              style={styles.icon}
            />
            <Text style={styles.textWhite}>AllSong</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleList}>
          <Text style={styles.titleContent}>Playlist</Text>
        </View>
        <View style={styles.listWrapper}>
          <Playlist style={styles.list} withOption={true} />
        </View>
        <MiniPlayer />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F7F1E3",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },

  shortcuts: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    height: 70,

    marginTop: 20,
  },

  shortcutsItem: {
    width: "30%",
    height: "100%",
    backgroundColor: "#868e96",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderRadius: 10,
    paddingLeft: 10,
    paddingBottom: 5,
  },

  textWhite: {
    color: "#f8f9fa",
    fontSize: 12,
  },

  titleList: {
    alignSelf: "flex-start",
    paddingLeft: 20,
  },

  titleContent: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0C2461",
  },

  listWrapper: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    height: "63%",
  },
});
