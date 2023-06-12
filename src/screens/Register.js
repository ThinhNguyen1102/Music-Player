import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import registerUser from "../utils/RegisterFirebase";

const Register = () => {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const navigation = useNavigation();

  const handleRegisterOnPress = async () => {
    let isValid = true;
    if (!nickName.trim()) {
      alert("Nickname is require!");
      isValid = false;
    }
    if (!email.trim()) {
      alert("E-mail is require!");
      isValid = false;
    }
    if (!password.trim()) {
      alert("Password is require!");
      isValid = false;
    }
    if (!cPassword.trim()) {
      alert("Confirm password is require!");
      isValid = false;
    }

    if (password !== cPassword) {
      alert("Confirm Password do not match!!!");
      setCPassword("");
      setPassword("");
      isValid = false;
    }

    if (isValid) {
      await registerUser(email, password, nickName);
      navigation.replace("Login");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.mainTitle}>Hi!</Text>
        <Text style={styles.subTitle}>Create an account. It's free</Text>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputItem}
          placeholder="Nick Name"
          placeholderTextColor={"#868e96"}
          value={nickName}
          onChangeText={(nickName) => setNickName(nickName)}
        ></TextInput>
        <TextInput
          style={styles.inputItem}
          placeholder="E-mail"
          placeholderTextColor={"#868e96"}
          value={email}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          style={styles.inputItem}
          placeholder="Password"
          placeholderTextColor={"#868e96"}
          value={password}
          onChangeText={(pass) => setPassword(pass)}
          secureTextEntry
        ></TextInput>
        <TextInput
          style={styles.inputItem}
          placeholder="Confirm Password"
          placeholderTextColor={"#868e96"}
          value={cPassword}
          onChangeText={(cpass) => setCPassword(cpass)}
          secureTextEntry
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleRegisterOnPress}>
        <Text style={styles.loginBtnText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.registerBox}>
        <Text style={styles.register}>Already have an account?</Text>
        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.registerBtnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F7F1E3",
    gap: 10,
  },

  title: {
    display: "flex",
    alignItems: "center",
    width: "80%",
    gap: 20,
  },

  mainTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#0C2461",
  },
  subTitle: {
    fontSize: 24,
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
  },
  forgot: {
    backgroundColor: "#0C2461",
    alignSelf: "flex-end",
    padding: 5,
    borderRadius: 5,
  },
  forgotText: {
    color: "#f8f9fa",
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
  registerBox: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },

  registerBtn: {
    backgroundColor: "#0C2461",
    padding: 5,
    borderRadius: 5,
  },
  registerBtnText: {
    color: "#f8f9fa",
  },
  register: {
    color: "#868e96",
  },
});
