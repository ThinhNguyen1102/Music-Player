import { firebase } from "../../firebase";

const registerUser = async (email, password, nickName) => {
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    // await result.user
    //   .sendEmailVerification({
    //     handleCodeInApp: true,
    //     url: "https://musicplayer-rn.firebaseapp.com",
    //   })
    //   .then(() => {
    //     alert("Verification email sent!!!");
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });

    await result.user.updateProfile({
      displayName: nickName,
    });
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

export default registerUser;

// firebase
//   .database()
//   .ref("user/" + result.user.uid)
//   .set(
//     {
//       nickName: nickName,
//       email: email,
//       favorites: [{ name: "nu cuoi 18 20" }, { name: "la lung" }],
//       playlists: [
//         {
//           name: "suzume",
//           songs: [{ name: "nu cuoi 18 20" }, { name: "la lung" }],
//         },
//         {
//           name: "yourname",
//           songs: [{ name: "nu cuoi 18 20" }, { name: "la lung" }],
//         },
//       ],
//       queue: [],
//     },
//     (err) => {
//       if (err) {
//         console.log(err);
//         alert(err.message);
//       }
//     }
//   );
