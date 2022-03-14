import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  max-width: 200px;
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    max-width: 879px;
    left: 58px;
  }

  > .icon-red {
    position: absolute;
    object-fit: contain;
    width: 15px;
    bottom: 110px;

    left: 180px;

    @media (min-width: 1024px) {
      bottom: 456px;
      left: 599px;
      width: 77px;
      height: 77px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    background-image: radial-gradient(circle at 0 0, #333, #2b2b2b);
    padding: 20px 35px;
    border-radius: 8px;

    @media (min-width: 1024px) {
      max-width: 779px;
      max-height: 488px;
      border-radius: 26px;
      padding: 56px 124px 79px 124px;
    }

    > h2 {
      font-family: "Poppins";
      font-weight: 700;
      font-style: 400;
      line-height: 1.24;
      letter-spacing: normal;
      text-align: left;
      color: #fff;
      font-size: 9px;
      width: 80px;

      @media (min-width: 1024px) {
        width: 310px;
        height: 85px;
        margin: 0 186px 32px 0;
        font-size: 37px;
      }
    }

    > p {
      font-family: "Poppins";
      font-weight: 400;
      font-style: 400;
      line-height: 1.64;
      letter-spacing: normal;
      text-align: left;
      color: #fff;
      font-size: 6px;

      @media (min-width: 1024px) {
        width: 496px;
        height: 109px;
        margin: 32px 0 40px;
        font-size: 18px;
      }
    }

    > button {
      width: 60px;
      height: 15px;
      border-radius: 25px;
      background-image: linear-gradient(to top, #d85931, #da3029, #c92251);
      cursor: pointer;
      border: none !important;

      @media (min-width: 1024px) {
        width: 176px;
        height: 55px;
        padding: 20px 46px;
      }

      > p {
        margin: 0;
        font-family: "Poppins";
        font-size: 16px;
        font-weight: 400;
        font-style: 400;
        letter-spacing: 1.08px;
        text-align: left;
        color: #fff;

        @media (min-width: 1024px) {
          width: 84px;
          height: 11px;
        }
      }
    }
    button:hover {
      transform: scale(1.1);
    }
  }

  > .icon-gray {
    position: absolute;
    object-fit: contain;
    width: 20px;
    top: 120px;
    left: 12px;

    @media (min-width: 1024px) {
      top: 436px;
      left: 40px;
      width: 106px;
      height: 105px;
    }
  }
`;
