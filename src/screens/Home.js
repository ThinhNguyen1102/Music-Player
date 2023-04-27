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
import Playlist from "../components/Playlist";
import TrackContext from "../contexts/TrackContext";
import SubControl from "../components/SubControl";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { usePlaybackState, State } from "react-native-track-player";
import Navigation from "../components/Navigation";

const Home = () => {
  const playerState = usePlaybackState();
  const navigation = useNavigation();
  const trackCtx = useContext(TrackContext);

  console.log(playerState);

  const spinValue = new Animated.Value(0);

  const spin = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 4000,
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
    <View style={styles.wrapper}>
      <Navigation />
      <View style={styles.container}>
        <View style={styles.shortcuts}>
          <TouchableOpacity style={[styles.shortcutsItem, styles.favorites]}>
            <Ionicons
              name="heart"
              size={20}
              color="#f8f9fa"
              style={styles.icon}
            />
            <Text style={styles.textWhite}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.shortcutsItem, styles.playlists]}>
            <MaterialCommunityIcons
              name="playlist-music"
              size={24}
              color="#f8f9fa"
              style={styles.icon}
            />
            <Text style={styles.textWhite}>Playlists</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.shortcutsItem, styles.queue]}>
            <Ionicons
              name="ios-stats-chart"
              size={18}
              color="#f8f9fa"
              style={styles.icon}
            />
            <Text style={styles.textWhite}>Queue</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleList}>
          <Text style={styles.titleContent}>All songs</Text>
        </View>
        <View style={styles.listWrapper}>
          <Playlist style={styles.list} />
        </View>
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
              <Text style={styles.title}>{trackCtx.currentTrack.title}</Text>
              <Text style={styles.artist}>{trackCtx.currentTrack.artist}</Text>
            </View>
          </View>
          <SubControl />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F7F1E3",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },

  shortcuts: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    height: 70,

    marginTop: 20,
  },

  shortcutsItem: {
    width: "30%",
    height: "100%",
    backgroundColor: "#868e96",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderRadius: 10,
    paddingLeft: 10,
    paddingBottom: 5,
  },

  textWhite: {
    color: "#f8f9fa",
    fontSize: 12,
  },

  titleList: {
    alignSelf: "flex-start",
    paddingLeft: 20,
  },

  titleContent: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0C2461",
  },

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

  listWrapper: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    height: "60%",
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
  },

  artist: {
    fontSize: 12,
  },
});
