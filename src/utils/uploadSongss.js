import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { firebase } from "../../firebase";
import songs from "../../assets/Data";

const uploadSongss = () => {
  const upload = async () => {
    songs.forEach((val) => {
      firebase
        .database()
        .ref("/songs")
        .push()
        .set(val, (err) => {
          if (err) {
            console.log(err);
          }
        });
    });
  };

  useEffect(() => {
    upload();
  }, []);

  return (
    <View>
      <Text>uploadSongss</Text>
    </View>
  );
};

export default uploadSongss;
