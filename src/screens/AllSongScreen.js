import { StyleSheet, View, FlatList } from "react-native";
import React, { useContext } from "react";
import TrackContext from "../contexts/TrackContext";
import PlaylistItem from "../components/PlaylistItem";
import Navigation from "../components/Navigation";
import MiniPlayer from "../components/MiniPlayer";

const AllSongScreen = () => {
  const trackCtx = useContext(TrackContext);
  return (
    <View style={styles.playlist_wrapper}>
      <Navigation />
      <FlatList
        style={styles.listBox}
        data={trackCtx.allSong}
        renderItem={({ item, index }) => (
          <PlaylistItem
            index={index}
            track={item}
            withOption={false}
            isInAllSong={true}
          />
        )}
        scrollToOverflowEnabled
      />
      <MiniPlayer />
    </View>
  );
};

export default AllSongScreen;

const styles = StyleSheet.create({
  playlist_wrapper: {
    flex: 1,
    backgroundColor: "#F7F1E3",
  },
  listBox: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 100,
  },
});
