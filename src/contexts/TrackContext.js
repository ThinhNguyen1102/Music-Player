import React, { useState, useEffect } from "react";
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  State,
} from "react-native-track-player";

import { setupPlayer, addTracks } from "../utils/TrackPlayerService";

const TrackContext = React.createContext({
  queue: [],
  setQueue: () => {},
  currentTrack: {},
  currentTrackIndex: 0,
});

export const TrackContextProvider = (props) => {
  const [queue, setQueue] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState({});

  useEffect(() => {
    async function setup() {
      try {
        let isSetup = await setupPlayer();
        // const queue = await TrackPlayer.getQueue();
        // if (isSetup && queue.length <= 0) {
        //   addTracks()
        //     .then(() => {
        //       return TrackPlayer.getQueue();
        //     })
        //     .then((queue) => {
        //       setQueue(queue);
        //       setCurrentTrack(queue[0]);
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
        // }
      } catch (err) {
        console.log(err);
      }
    }

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
        setQueue: setQueue,
        currentTrack: currentTrack,
        currentTrackIndex: currentTrackIndex,
      }}
    >
      {props.children}
    </TrackContext.Provider>
  );
};

export default TrackContext;
