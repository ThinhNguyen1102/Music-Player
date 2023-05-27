import React, { useContext } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import PlaylistItem from "./PlaylistItem";
import TrackContext from "../contexts/TrackContext";

function Playlist({ withOption }) {
  const trackCtx = useContext(TrackContext);

  return (
    <View style={styles.playlist_wrapper}>
      <FlatList
        data={trackCtx.queue}
        renderItem={({ item, index }) => (
          <PlaylistItem index={index} track={item} withOption={withOption} />
        )}
        scrollToOverflowEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  playlist_wrapper: {
    width: "100%",
  },
});

export default Playlist;
