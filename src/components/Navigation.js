import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Navigation = () => {
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
      <Text style={styles.navTitle}>Navigation</Text>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  NavWrapper: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },

  navTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0C2461",
  },
});
