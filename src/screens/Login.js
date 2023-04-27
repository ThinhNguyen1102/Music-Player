import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../firebase";
import { addTracks } from "../utils/TrackPlayerService";
import TrackPlayer from "react-native-track-player";
import TrackContext from "../contexts/TrackContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const trackCtx = useContext(TrackContext);

  useEffect(() => {
    const unsubcrible = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user user");
      }
    });

    return unsubcrible;
  }, []);

  const handleLoginOnPress = async () => {
    let isValid = true;
    if (!email.trim()) {
      alert("E-mail is require!");
      isValid = false;
    }
    if (!password.trim()) {
      alert("Password is require!");
      isValid = false;
    }
    if (isValid) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          addTracks()
            .then(() => {
              return TrackPlayer.getQueue();
            })
            .then((queue) => {
              trackCtx.setQueue(queue);
              navigation.replace("SideBar");
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.mainTitle}>Hello Again!</Text>
        <Text style={styles.subTitle}>Wellcome back you're been missed!</Text>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputItem}
          placeholder="E-mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
        ></TextInput>
        <TextInput
          style={styles.inputItem}
          placeholder="Password"
          value={password}
          onChangeText={(pass) => setPassword(pass)}
          secureTextEntry
        ></TextInput>
        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgotText}>forgot password</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLoginOnPress}>
        <Text style={styles.loginBtnText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registerBox}>
        <Text style={styles.register}>Not a member?</Text>
        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.registerBtnText}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
  },
  subTitle: {
    fontSize: 24,
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
});
