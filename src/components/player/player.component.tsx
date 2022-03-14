import React, { useRef, useState, useCallback } from "react";
import { IPlayerProps } from "../../utils/models/player.model";

import { Container } from "./player.styles";

// Assets
import play from "../../assets/icon-play.jpg";

const Player: React.FC<IPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<any>(null);

  const playOrPause = useCallback(() => {
    if (videoRef?.current?.paused) {
      videoRef?.current?.play();
    } else {
      videoRef?.current?.pause();
    }
  }, []);

  const onPlay = useCallback(() => setIsPlaying(true), []);

  const onPause = useCallback(() => setIsPlaying(false), []);
  return (
    <Container>
      <div className={`video ${isPlaying ? "playing" : "no-playing"}`}>
        <video onPlay={onPlay} onPause={onPause} ref={videoRef} src={src} />
        <div className="controls" onClick={playOrPause}>
          <img
            src={play}
            alt="play button"
            className={`video-control ${
              isPlaying ? "control-hidden" : "control-shown"
            }`}
          />
        </div>
      </div>
    </Container>
  );
};

export default Player;
