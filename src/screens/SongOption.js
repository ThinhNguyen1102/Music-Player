import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import PlaylistSelect from "../components/PlaylistSelect";
import { FlatList } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import TrackContext from "../contexts/TrackContext";

const SongOption = ({ route }) => {
  const navigation = useNavigation();
  const trackCtx = useContext(TrackContext);

  const { track } = route.params;
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        ]}
        onPress={navigation.goBack}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Playlists</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("NewPlaylistS");
            }}
          >
            <Ionicons name="ios-add-circle" size={36} color="#0C2461" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={trackCtx.playlists}
          renderItem={({ item }) => (
            <PlaylistSelect track={track} playlist={item} />
          )}
          scrollToOverflowEnabled
        />
      </View>
    </View>
  );
};

export default SongOption;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    display: "flex",
    backgroundColor: "#F7F1E3",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  optionItem: {
    borderRadius: 10,
    height: 40,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
    width: 300,
  },
  title: {
    fontSize: 20,
    color: "#0C2461",
  },
  optionText: {
    color: "#0C2461",
    fontWeight: "bold",
  },
});
