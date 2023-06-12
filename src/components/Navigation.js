import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Navigation = ({ title }) => {
  const navigation = useNavigation();
  const handleMenuOnPress = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.NavWrapper}>
      <TouchableOpacity onPress={() => handleMenuOnPress()}>
        <AntDesign
          name="menu-fold"
          size={26}
          color="#0C2461"
          style={styles.navIcon}
        />
      </TouchableOpacity>
      <Text style={styles.navTitle}>{title ? title : "Navigation"}</Text>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  NavWrapper: {
    position: "relative",
    height: 50,
    display: "flex",
  },
  navTitle: {
    color: "#0C2461",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 20,
    paddingTop: 12,
  },
  navIcon: {
    position: "absolute",
    top: 12,
    left: 12,
  },
});
