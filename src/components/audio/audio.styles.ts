import styled from "styled-components";

import IAudioProps from "../../utils/models/audio.model";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: ${(props: IAudioProps) => props.appeareance};
  padding: 0 32px;
  box-shadow: 0px 42px 79px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;

  margin-top: 50px;

  > img {
    height: 94px;
  }

  > .dark {
    transform-style: preserve-3d;
    animation: moveAnimationDark 2s infinite alternate;
  }

  @keyframes moveAnimationDark {
    from {
      transform: translateX(8px);
    }

    to {
      transform: translateX(-6px);
    }
  }

  > .light {
    transform-style: preserve-3d;
    animation: moveAnimationLight 2s infinite alternate;
  }

  @keyframes moveAnimationLight {
    from {
      transform: translateX(2px);
    }

    to {
      transform: translateX(-12px);
    }
  }

  > .medium {
    transform-style: preserve-3d;
    animation: moveAnimationMedium 2s infinite alternate;
  }

  @keyframes moveAnimationMedium {
    from {
      transform: translateX(2px);
    }

    to {
      transform: translateX(-6px);
    }
  }
`;
