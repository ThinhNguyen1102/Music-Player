import TrackPlayer, {
  usePlaybackState,
  State,
} from "react-native-track-player";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, View, StyleSheet } from "react-native";

function Controls({ onShuffle }) {
  const playerState = usePlaybackState();

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

  return (
    <View style={styles.control_wrapper}>
      <TouchableOpacity
        onPress={async () => {
          return TrackPlayer.skipToPrevious().then((data) => {
            TrackPlayer.play();
          });
        }}
      >
        <Ionicons name="play-skip-back" size={42} color="#0C2461" />
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
        <Ionicons name="play-skip-forward" size={42} color="#0C2461" />
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
    gap: 32,
  },
});

export default Controls;
