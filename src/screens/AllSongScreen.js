import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import TrackContext from "../contexts/TrackContext";
import PlaylistItem from "../components/PlaylistItem";
import Navigation from "../components/Navigation";
import MiniPlayer from "../components/MiniPlayer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const AllSongScreen = () => {
  const navigation = useNavigation();
  const trackCtx = useContext(TrackContext);
  return (
    <View style={styles.playlist_wrapper}>
      <Navigation title={"All Song"} />
      <TouchableOpacity
        onPress={() => {
          trackCtx.changeQueue(trackCtx.allSong, 0);
          navigation.navigate("PlayScreen");
        }}
        underlayColor="white"
        style={styles.playBtnBox}
      >
        <Ionicons name={`ios-play-circle`} size={56} color="#0C2461" />
      </TouchableOpacity>
      <FlatList
        style={styles.listBox}
        data={trackCtx.allSong}
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
};

export default AllSongScreen;

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
