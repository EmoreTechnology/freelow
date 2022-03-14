import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .video.playing {
    display: flex;
    position: absolute;
    max-width: 719px;
    width: 200px;
    height: 200px;
    z-index: 1;

    @media (min-width: 1024px) {
      width: 392px;
      height: 363px;
    }

    > video {
      border-radius: 26px;
    }

    > .controls {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      @media (min-width: 1024px) {
        width: 718px;
      }

      .video-control {
        width: 55px;
        transition: opacity 200ms linear;

        @media (min-width: 1024px) {
          width: 100px;
        }
      }
      .control-shown {
        opacity: 1;
      }

      .control-hidden {
        opacity: 0;
        z-index: 1;
      }
    }
  }

  > .video.no-playing {
    display: flex;
    position: relative;
    max-width: 519px;
    width: 100%;
    height: 100%;

    > video {
      border-radius: 26px;
      width: 100%;

      @media (min-width: 1024px) {
        width: 718px;
      }
    }

    > .controls {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      @media (min-width: 1024px) {
        width: 718px;
      }

      .video-control {
        width: 55px;
        transition: opacity 200ms linear;

        @media (min-width: 1024px) {
          width: 100px;
        }
      }

      .control-shown {
        opacity: 1;
      }

      .control-hidden {
        opacity: 0;
        z-index: 1;
      }
    }
  }
`;
