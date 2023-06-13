import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../firebase";

const ResetPassScreen = () => {
  const [email, setEmail] = useState("");

  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <Text style={styles.mainTitle}>Reset Your Password!!</Text>
        <Text style={styles.subTitle}>Please enter email address!</Text>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputItem}
          placeholder="Your email"
          placeholderTextColor={"#868e96"}
          value={email}
          onChangeText={(email) => setEmail(email)}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          try {
            if (!email.trim()) {
              alert("Email invalid!");
              return;
            }
            firebase.auth().sendPasswordResetEmail(email);
            alert("Please check your email");
            navigation.navigate("Login");
          } catch (error) {
            console.log(error);
            alert(error.message);
          }
        }}
      >
        <Text style={styles.loginBtnText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backLogin}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.backLoginText}>login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPassScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F7F1E3",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  title: {
    display: "flex",
    alignItems: "center",
    width: "80%",
    gap: 20,
  },

  mainTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0C2461",
  },
  subTitle: {
    fontSize: 20,
    color: "#0C2461",
    textAlign: "center",
  },
  inputBox: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    gap: 20,
    paddingBottom: 10,
  },
  inputItem: {
    width: "100%",
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    paddingLeft: 15,
    color: "#495057",
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "#0C2461",
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
  },
  loginBtnText: {
    textAlign: "center",
    color: "#f8f9fa",
    fontWeight: "bold",
    fontSize: 20,
  },
  backLogin: {
    width: 60,
    backgroundColor: "#0C2461",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: "flex-end",
    marginRight: 20,
  },
  backLoginText: {
    textAlign: "center",
    color: "#f8f9fa",
  },
});
