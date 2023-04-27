import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
} from "react-native-track-player";

import { firebase } from "../../firebase";

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch (err) {
    await TrackPlayer.setupPlayer();
    const lolo = await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
        Capability.Stop,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      progressUpdateEventInterval: 2,
    });

    if (lolo) {
      console.log("trong setup nhe");
    }
    isSetup = true;
  } finally {
    return isSetup;
  }
}

export async function addTracks() {
  const songs = [];
  try {
    const snapshot = await firebase.database().ref("/songs").get();

    if (snapshot) {
      snapshot.forEach((item) => {
        songs.push(item.val());
      });
      await TrackPlayer.add(songs);
      await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    console.log("Event.RemotePause");
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    console.log("Event.RemotePlay");
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    console.log("Event.RemoteNext");
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    console.log("Event.RemotePrevious");
    TrackPlayer.skipToPrevious();
  });
}
