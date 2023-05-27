import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import React, { useContext } from "react";
import TrackContext from "../contexts/TrackContext";
import { useNavigation } from "@react-navigation/native";

const PlaylistSelect = ({ track, playlist }) => {
  const trackCtx = useContext(TrackContext);
  const navigation = useNavigation();
  function handleOnPress() {
    let isExisted = false;
    if (playlist.data.songs) {
      const songs = playlist.data.songs;
      songs.forEach((val) => {
        if (val.url === track.url) {
          isExisted = true;
        }
      });
    }

    if (!isExisted) {
      trackCtx.addSongToPlaylist(track, playlist);
      navigation.goBack();
    } else {
      alert("this song is exited playlist");
    }
  }
  return (
    <View style={styles.wrapper}>
      <TouchableHighlight
        onPress={handleOnPress}
        style={styles.playlistSelect}
        underlayColor={"white"}
      >
        <View style={styles.container}>
          <Image
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
            }}
            style={styles.playlistPhoto}
          />
          <Text style={styles.playlistName}>{playlist.data?.playlistName}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default PlaylistSelect;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  playlistSelect: {
    fontSize: 20,
    padding: 5,
    paddingBottom: 10,
    paddingTop: 10,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderRadius: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    gap: 20,
  },
  playlistPhoto: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  playlistName: {
    color: "#0C2461",
    fontSize: 16,
    fontWeight: "bold",
  },
});
