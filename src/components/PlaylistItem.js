import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import TrackPlayer from "react-native-track-player";
import TrackContext from "../contexts/TrackContext";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

function PlaylistItem({
  index,
  track,
  withOption,
  playlist,
  isInPlaylist,
  isInAllSong,
}) {
  const trackCtx = useContext(TrackContext);
  const navigation = useNavigation();

  async function handleItemPress() {
    if (isInPlaylist && playlist) {
      trackCtx.changeQueue(playlist.data.songs, index);
      navigation.navigate("PlayScreen");
    } else if (isInAllSong) {
      trackCtx.changeQueue(trackCtx.allSong, index);
      navigation.navigate("PlayScreen");
    } else {
      if (trackCtx.currentTrackIndex !== index) {
        TrackPlayer.skip(index);
        TrackPlayer.play();
        navigation.navigate("PlayScreen");
      }
    }
  }

  function handleOptionPress() {
    navigation.navigate("SongOption", {
      track: track,
    });
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handleItemPress} style={styles.playlistItem}>
        <View style={styles.itemLeft}>
          <Image source={{ uri: track.artwork }} style={styles.artwork} />
          <View style={styles.info}>
            <Text
              style={{
                ...styles.title,
                ...{
                  color:
                    trackCtx.currentTrack.url === track.url
                      ? "#4A69BD"
                      : "#495057",
                },
              }}
            >
              {track.title}
            </Text>
            <Text style={styles.artist}>{track.artist}</Text>
          </View>
        </View>

        <View style={styles.itemRight}>
          {trackCtx.currentTrack.url === track.url && (
            <TouchableOpacity style={styles.itemOption}>
              <Ionicons name="stats-chart" size={16} color="#4A69BD" />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.itemOption}>
            <Ionicons name="heart" size={20} color="#adb5bd" />
          </TouchableOpacity>
          {withOption && (
            <TouchableOpacity
              style={styles.itemOption}
              onPress={handleOptionPress}
            >
              <Entypo name="dots-three-vertical" size={20} color="#adb5bd" />
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  playlistItem: {
    fontSize: 20,
    color: "#0C2461",
    borderStyle: "solid",
    borderColor: "#a4b0be",
    borderBottomWidth: 1,
    padding: 5,
    paddingBottom: 10,
    paddingTop: 10,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
  },

  artwork: {
    width: 36,
    height: 36,
    borderRadius: 5,
  },

  itemLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "60%",
  },

  itemRight: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    width: "75%",
    overflow: "hidden",
  },

  title: {
    fontSize: 13,
    fontWeight: "bold",
    width: "100%",
  },

  artist: {
    fontSize: 12,
    width: "100%",
    color: "#868e96",
  },
});

export default PlaylistItem;
