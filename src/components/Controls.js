import TrackPlayer, {
  usePlaybackState,
  State,
  RepeatMode,
} from "react-native-track-player";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import TrackContext from "../contexts/TrackContext";
import { useNavigation } from "@react-navigation/native";

function Controls() {
  const playerState = usePlaybackState();
  const trackCtx = useContext(TrackContext);
  const navigation = useNavigation();

  async function handlePlayPress() {
    try {
      if ((await TrackPlayer.getState()) == State.Playing) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleRepeat() {
    try {
      if ((await TrackPlayer.getRepeatMode()) == RepeatMode.Track) {
        await TrackPlayer.setRepeatMode(RepeatMode.Queue);
        trackCtx.setRepeatMode(RepeatMode.Queue);
      } else {
        await TrackPlayer.setRepeatMode(RepeatMode.Track);
        trackCtx.setRepeatMode(RepeatMode.Track);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.control_wrapper}>
      <TouchableOpacity onPress={handleRepeat}>
        <MaterialIcons
          name={`${
            trackCtx.repeatMode == RepeatMode.Queue ? "repeat" : "repeat-one"
          }`}
          size={36}
          color="#0C2461"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          return TrackPlayer.skipToPrevious().then((data) => {
            TrackPlayer.play();
          });
        }}
      >
        <Ionicons name="ios-play-skip-back" size={38} color="#0C2461" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePlayPress}>
        <Ionicons
          name={`ios-${playerState == State.Playing ? "pause" : "play"}-circle`}
          size={56}
          color="#0C2461"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          return TrackPlayer.skipToNext().then((data) => {
            TrackPlayer.play();
          });
        }}
      >
        <Ionicons name="ios-play-skip-forward" size={38} color="#0C2461" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          navigation.goBack();
        }}
      >
        <MaterialCommunityIcons
          name="playlist-music"
          size={42}
          color="#0C2461"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  control_wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: "95%",
  },
});

export default Controls;
