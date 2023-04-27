import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { firebase } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import TrackPlayer from "react-native-track-player";

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  const handleLogoutOnPress = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        TrackPlayer.reset();
        TrackPlayer.pause();
        navigation.replace("Login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#F7F1E3" }}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fmusic_bg.jpg?alt=media&token=8afdd2ba-9c09-4526-95b1-1c9ee5108c44",
          }}
          style={styles.bgcImageWrapper}
        >
          <View style={styles.container}>
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fuser_avatar.png?alt=media&token=7d1b3279-7d00-45a6-8d55-18a134ffd83b",
              }}
              style={styles.userAvatar}
            />
            <Text style={styles.nickName}>
              {firebase.auth().currentUser.displayName}
            </Text>
            <View style={styles.emailBox}>
              <MaterialCommunityIcons name="email" size={20} color="#0C2461" />
              <Text style={styles.email}>
                {firebase.auth().currentUser.email}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footerWraper}>
        <TouchableOpacity
          style={styles.logoutBox}
          onPress={() => handleLogoutOnPress()}
        >
          <MaterialIcons
            name="logout"
            size={24}
            color="#f8f9fa"
            style={styles.logoutIcon}
          />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  bgcImageWrapper: {
    height: 200,
    // transform: [{ translateY: -5 }],
  },
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
    paddingBottom: 10,
    backgroundColor: "#f7f1e3ab",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: 5,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "#0C2461",
    borderWidth: 2,
  },
  nickName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0C2461",
  },
  emailBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  email: {
    color: "#0C2461",
  },

  footerWraper: {
    padding: 20,
    paddingBottom: 40,
  },

  logoutBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
    backgroundColor: "#0C2461",
    width: 120,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
  },
  logoutText: {
    fontSize: 18,
    color: "#f8f9fa",
  },
});
