import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import TrackContext from "../contexts/TrackContext";
import PlaylistItem from "../components/PlaylistItem";
import Navigation from "../components/Navigation";
import MiniPlayer from "../components/MiniPlayer";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function FavoritesScreen() {
  const trackCtx = useContext(TrackContext);
  const navigation = useNavigation();
  const songs = trackCtx.allSong.filter((val) => val.isFavorited);
  return (
    <View style={styles.playlist_wrapper}>
      <Navigation title={"Favorites"} />
      <TouchableOpacity
        onPress={() => {
          trackCtx.changeQueue(songs, 0);
          navigation.navigate("PlayScreen");
        }}
        underlayColor="white"
        style={styles.playBtnBox}
      >
        <Ionicons name={`ios-play-circle`} size={56} color="#0C2461" />
      </TouchableOpacity>
      <FlatList
        style={styles.listBox}
        data={songs}
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
}

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
  playBtnBox: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
  },
});
