import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../firebase";
import TrackContext from "../contexts/TrackContext";

const NewPlaylist = () => {
  const [playlistName, setPlayListname] = useState("");
  const navigation = useNavigation();
  const trackCtx = useContext(TrackContext);

  function handleNewPlaylist() {
    firebase
      .database()
      .ref("/playlists")
      .push()
      .set(
        {
          userId: firebase.auth().currentUser.uid,
          playlistName: playlistName,
          songs: [],
        },
        (err) => {
          if (err) {
            console.log(err);
            alert(err.message);
          } else {
            alert("Create playlist success.");
            trackCtx.getUserPlaylist();
            navigation.goBack();
          }
        }
      );

    setPlayListname("");
  }

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
        <Text style={styles.title}>Your Playlists</Text>
        <TextInput
          style={styles.inputItem}
          placeholder="Playlist Name"
          placeholderTextColor={"#868e96"}
          value={playlistName}
          onChangeText={(playlistName) => setPlayListname(playlistName)}
        ></TextInput>
        <TouchableOpacity style={styles.createBtn} onPress={handleNewPlaylist}>
          <Text style={styles.createBtnText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPlaylist;

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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 20,
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: "#0C2461",
  },
  inputItem: {
    width: "100%",
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    paddingLeft: 15,
    color: "#495057",
  },
  createBtn: {
    backgroundColor: "#0C2461",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  createBtnText: {
    color: "white",
  },
});
