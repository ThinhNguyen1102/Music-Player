/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import TrackPlayer from "react-native-track-player";
import {
  playbackService,
  setupPlayer,
  addTracks,
} from "./src/utils/TrackPlayerService";

AppRegistry.registerComponent(appName, () => {
  return App;
});

TrackPlayer.registerPlaybackService(() => playbackService);
