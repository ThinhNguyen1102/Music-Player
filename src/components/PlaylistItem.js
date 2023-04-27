import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import TrackPlayer from "react-native-track-player";
import TrackContext from "../contexts/TrackContext";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

function PlaylistItem({ index, track }) {
  const trackCtx = useContext(TrackContext);
  const navigation = useNavigation();

  function handleItemPress() {
    if (trackCtx.currentTrackIndex !== index) {
      TrackPlayer.skip(index);
      TrackPlayer.play();
      navigation.navigate("PlayScreen");
    }
  }

  return (
    <TouchableOpacity onPress={handleItemPress} style={styles.playlistItem}>
      <View style={styles.itemLeft}>
        <Image source={{ uri: track.artwork }} style={styles.artwork} />
        <View style={styles.info}>
          <Text
            style={{
              ...styles.title,
              ...{
                color:
                  trackCtx.currentTrackIndex === index ? "#4A69BD" : "#495057",
              },
            }}
          >
            {track.title}
          </Text>
          <Text style={styles.artist}>{track.artist}</Text>
        </View>
      </View>

      <View style={styles.itemRight}>
        {trackCtx.currentTrackIndex === index && (
          <TouchableOpacity style={styles.itemOption}>
            <Ionicons
              name="ios-stats-chart-outline"
              size={16}
              color="#4A69BD"
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.itemOption}>
          <Ionicons name="heart" size={20} color="#adb5bd" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemOption}>
          <Entypo name="dots-three-vertical" size={20} color="#adb5bd" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 14,
    fontWeight: "bold",
    width: "100%",
  },

  artist: {
    fontSize: 12,
    width: "100%",
  },
});

export default PlaylistItem;
