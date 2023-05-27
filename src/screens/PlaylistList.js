import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect } from "react";

import Navigation from "../components/Navigation";
import UserPlaylist from "../components/UserPlaylist";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TrackContext from "../contexts/TrackContext";
import MiniPlayer from "../components/MiniPlayer";

const PlaylistList = () => {
  const navigation = useNavigation();
  const trackCtx = useContext(TrackContext);

  useEffect(() => {
    trackCtx.getUserPlaylist();
  }, []);

  function onPressPL(playlist) {
    navigation.navigate("PlaylistDetail", {
      playlist: playlist,
    });
  }
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          navigation.navigate("NewPlaylist");
        }}
      >
        <Ionicons name="ios-add-circle" size={64} color="#0C2461" />
      </TouchableOpacity>
      <Navigation />
      <View style={styles.container}>
        <FlatList
          style={styles.listWrapper}
          data={trackCtx.playlists}
          renderItem={({ item }) => (
            <UserPlaylist onPressPL={onPressPL} playlist={item} />
          )}
          numColumns={2}
          scrollToOverflowEnabled
        />
      </View>
      <MiniPlayer />
    </View>
  );
};

export default PlaylistList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F7F1E3",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtn: {
    position: "absolute",
    bottom: 110,
    right: 10,
    zIndex: 1,
  },
});
