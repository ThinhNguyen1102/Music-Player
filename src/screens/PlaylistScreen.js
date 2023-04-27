import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Playlist from "../components/Playlist";
import Navigation from "../components/Navigation";

const PlaylistScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Navigation />
      <View style={styles.container}>
        <Playlist />
      </View>
    </View>
  );
};

export default PlaylistScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F7F1E3",
  },
  container: {
    flex: 1,
    padding: 20,
  },
});
