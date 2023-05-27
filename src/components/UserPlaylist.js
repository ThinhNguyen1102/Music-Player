import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";

const UserPlaylist = ({ onPressPL, playlist }) => {
  const numOfSong = playlist.data.songs ? playlist.data.songs.length : 0;
  return (
    <TouchableHighlight
      onPress={() => {
        return onPressPL(playlist);
      }}
      style={styles.wrapper}
      underlayColor="white"
    >
      <View>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
          }}
          style={styles.playlistPhoto}
        />
        <Text style={styles.playlistName}>{playlist.data?.playlistName}</Text>
        <Text style={styles.playlistNum}>{numOfSong} bai hat</Text>
      </View>
    </TouchableHighlight>
  );
};

export default UserPlaylist;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  playlistPhoto: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  playlistName: {
    color: "#0C2461",
    fontSize: 16,
    fontWeight: "bold",
  },
  playlistNum: {
    color: "#868e96",
    fontSize: 12,
  },
});
