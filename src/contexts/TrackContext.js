import React, { useState, useEffect } from "react";
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  State,
  RepeatMode,
} from "react-native-track-player";

import { setupPlayer } from "../utils/TrackPlayerService";
import { firebase } from "../../firebase";

const TrackContext = React.createContext({
  queue: [],
  playlists: [],
  setQueue: () => {},
  currentTrack: {},
  currentTrackIndex: 0,
  repeatMode: RepeatMode.Queue,
  setRepeatMode: () => {},
  getUserPlaylist: () => {},
  addSongToPlaylist: () => {},
  allSong: [],
  isLoading: false,
  setIsLoading: () => {},
  changeQueue: () => {},
});

export const TrackContextProvider = (props) => {
  const [queue, setQueue] = useState([]);
  const [allSong, setAllSong] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState({});
  const [repeatMode, setRepeatMode] = useState(RepeatMode.Queue);
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const setQueuePlayer = (queue, index) => {
    setQueue(queue);
    setCurrentTrackIndex(index);
    setCurrentTrack(queue[index]);
  };

  async function addSongToPlaylist(track, playlist) {
    const data = {
      ...playlist.data,
      songs: playlist.data.songs ? [...playlist.data.songs, track] : [track],
    };

    firebase
      .database()
      .ref("/playlists/" + playlist.uid)
      .update(data, (err) => {
        if (err) {
          console.log(err);
          alert(err.message);
        } else {
          alert(`add ${track.title} to ${playlist.data.playlistName} success`);
          getUserPlaylist();
        }
      });
  }

  async function getUserPlaylist() {
    const list = [];
    const userId = firebase.auth().currentUser.uid;

    try {
      const snapshot = await firebase
        .database()
        .ref("/playlists")
        .orderByChild("playlistName")
        .get();

      if (snapshot) {
        snapshot.forEach((item) => {
          if (item.val().userId === userId) {
            list.push({ data: item.val(), uid: item.key });
          }
        });

        setPlaylists(list);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function changeQueue(queue, index) {
    try {
      TrackPlayer.reset();
      TrackPlayer.add(queue);
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      TrackPlayer.skip(index);
      TrackPlayer.play();
      setQueue(queue);
      setCurrentTrackIndex(index);
      setCurrentTrack(queue[index]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function getAllSong() {
      const songs = [];
      try {
        const snapshot = await firebase
          .database()
          .ref("/songs")
          .orderByChild("title")
          .get();

        if (snapshot) {
          snapshot.forEach((item) => {
            songs.push(item.val());
          });
          setAllSong(songs);
        }
      } catch (err) {
        console.log(err);
      }
    }

    async function setup() {
      try {
        await setupPlayer();
      } catch (err) {
        console.log(err);
      }
    }

    if (firebase.auth().currentUser) {
      getUserPlaylist();
    }

    getAllSong();
    setup();
  }, []);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    if (event.state == State.nextTrack) {
      let index = await TrackPlayer.getCurrentTrack();
      setCurrentTrackIndex(index);
      setCurrentTrack(queue[index]);
    }
  });

  return (
    <TrackContext.Provider
      value={{
        queue: queue,
        setQueue: setQueuePlayer,
        currentTrack: currentTrack,
        currentTrackIndex: currentTrackIndex,
        repeatMode: repeatMode,
        setRepeatMode: setRepeatMode,
        playlists: playlists,
        getUserPlaylist: getUserPlaylist,
        addSongToPlaylist: addSongToPlaylist,
        allSong: allSong,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        changeQueue: changeQueue,
      }}
    >
      {props.children}
    </TrackContext.Provider>
  );
};

export default TrackContext;
