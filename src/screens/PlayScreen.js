import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import Slider from "@react-native-community/slider";
import TrackPlayer, { useProgress } from "react-native-track-player";

import Controls from "../components/Controls";
import TrackContext from "../contexts/TrackContext";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const PlayScreen = () => {
  const progress = useProgress();
  const trackCtx = useContext(TrackContext);
  const navigation = useNavigation();

  const handleBackOnPress = () => {
    navigation.goBack();
  };

  function format(seconds) {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, "0");
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  }

  // console.log(trackCtx.currentTrack);
  const artworkUri = trackCtx.currentTrack
    ? trackCtx.currentTrack.artwork
    : "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b";

  return (
    <View style={styles.wrapper}>
      <View style={styles.backHome}>
        <TouchableOpacity onPress={() => handleBackOnPress()}>
          <Ionicons
            name="ios-chevron-down"
            size={28}
            color="#0C2461"
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image
          source={{
            uri: artworkUri,
          }}
          style={styles.artwork}
        />
        <View style={styles.main}>
          <Text style={styles.title}>{trackCtx.currentTrack?.title}</Text>
          <Text style={styles.artist}>{trackCtx.currentTrack?.artist}</Text>
        </View>
        <View style={styles.sliderBox}>
          <Slider
            style={styles.slider}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            minimumTrackTintColor="#0C2461"
            maximumTrackTintColor="#868e96"
            thumbTintColor="#0C2461"
            onSlidingComplete={async (value) => {
              await TrackPlayer.seekTo(value);
            }}
          />
          <View style={styles.progressBox}>
            <Text style={styles.progressText}>{format(progress.position)}</Text>
            <Text style={styles.progressText}>{format(progress.duration)}</Text>
          </View>
        </View>
        <Controls />
      </View>
    </View>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F7F1E3",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },

  backHome: {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },

  navTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0C2461",
  },

  artwork: {
    width: 270,
    height: 270,
    marginBottom: 60,
    borderRadius: 10,
  },

  sliderBox: {
    width: "100%",
    marginBottom: 30,
    // backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  slider: {
    width: "95%",
  },

  progressBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    paddingLeft: 15,
    paddingRight: 15,
  },

  progressText: {
    color: "#0C2461",
    fontSize: 12,
    fontWeight: "bold",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0C2461",
  },
  artist: {
    color: "#4A69BD",
  },

  main: {
    width: "95%",
    paddingLeft: 14,
    display: "flex",
    gap: 5,
  },
  loading: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: "#fff",
  },
});
