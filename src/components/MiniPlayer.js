import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import TrackContext from "../contexts/TrackContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SubControl from "./SubControl";
import { State, usePlaybackState } from "react-native-track-player";

const MiniPlayer = () => {
  const navigation = useNavigation();
  const trackCtx = useContext(TrackContext);
  const playerState = usePlaybackState();

  const spinValue = new Animated.Value(0);

  const spin = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start(() => spin());
  };

  useEffect(() => {
    if (playerState === State.Playing) {
      spin();
    }
  }, [playerState]);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PlayScreen");
      }}
      style={styles.miniPlayer}
    >
      <View style={styles.itemLeft}>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <MaterialCommunityIcons
            name="music-circle"
            size={56}
            color="#0C2461"
          />
        </Animated.View>
        <View style={styles.info}>
          <Text style={styles.title}>{trackCtx.currentTrack?.title}</Text>
          <Text style={styles.artist}>{trackCtx.currentTrack?.artist}</Text>
        </View>
      </View>
      <SubControl />
    </TouchableOpacity>
  );
};

export default MiniPlayer;

const styles = StyleSheet.create({
  miniPlayer: {
    position: "absolute",
    bottom: 0,

    width: "100%",
    height: 100,

    backgroundColor: "#f1f3f5",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 10,

    elevation: 5,
    borderRadius: 30,
  },
  itemLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    maxWidth: 150,
    color: "#0C2461",
  },

  artist: {
    fontSize: 12,
    color: "#0C2461",
  },
});
