import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import PlaylistItem from "../components/PlaylistItem";
import TrackContext from "../contexts/TrackContext";
import MiniPlayer from "../components/MiniPlayer";

const PlaylistDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const trackCtx = useContext(TrackContext);

  const playlist = route.params.playlist;
  const handleBackOnPress = () => {
    navigation.goBack();
  };

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
      <View style={styles.contrainer}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
          }}
          style={styles.playlistPhoto}
        />
        <Text style={styles.playlistName}>{playlist.data?.playlistName}</Text>
        <TouchableOpacity
          onPress={() => {
            trackCtx.changeQueue(playlist.data.songs, 0);
            navigation.navigate("PlayScreen");
          }}
          underlayColor="white"
        >
          <Ionicons name={`ios-play-circle`} size={56} color="#0C2461" />
        </TouchableOpacity>

        <View style={styles.playlistWrapper}>
          <FlatList
            data={playlist.data.songs}
            renderItem={({ item, index }) => (
              <PlaylistItem
                track={item}
                index={index}
                isInPlaylist
                playlist={playlist}
              />
            )}
            scrollToOverflowEnabled
          />
        </View>
      </View>
      <MiniPlayer />
    </View>
  );
};

export default PlaylistDetail;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F7F1E3",
    flex: 1,
  },
  contrainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    justifyContent: "flex-start",
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
  playlistName: {},

  playlistPhoto: {
    width: 160,
    height: 160,
    borderRadius: 10,
  },
  playlistName: {
    color: "#0C2461",
    fontSize: 16,
    fontWeight: "bold",
  },
  playlistWrapper: {
    width: "90%",
    height: "50%",
  },
});
