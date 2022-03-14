import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > .navbar {
    display: flex;
    margin: 16px auto;

    @media (min-width: 1440px) {
      margin: 82px 160px;
    }
  }

  > .header {
    display: flex;
  }

  > .freelow {
    display: flex;
    margin-bottom: 68px;
  }

  > .exclusivities {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    > .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      z-index: 1;

      > .player {
        display: flex;
        width: 360px;
      }

      > .card-player {
        display: flex;
      }
    }

    > .wrapper {
      display: flex;
      position: relative;
      bottom: 148px;
      width: 100%;
    }
  }

  > .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 132px;
  }

  > .footer {
    display: flex;
    margin-top: 38px;
  }

  > .evaluation {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    margin: 118px 0 108px;

    .first-section {
      display: flex;
      flex-direction: column;
      height: 654px;
      justify-content: center;

      .card {
        display: flex;
        width: 100%;
        width: 27px;
        box-shadow: 0px 13px 21px 0 rgb(0 0 0 / 16%);
        margin: 129px 0 0 80px;

        @media (min-width: 768px) {
          width: 80px;
        }

        @media (min-width: 1024px) {
          width: 100px;
        }

        @media (min-width: 1440px) {
          width: 163px;
        }
      }
    }

    > .content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: center;
      margin-left: 159px;

      > .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;

        > h2 {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 639px;
          margin: 0 auto;
          font-family: "Poppins";
          font-size: 66px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.23;
          letter-spacing: normal;
          text-align: center;
          color: #121b47;

          > span {
            width: 434px;
            background-image: linear-gradient(to top, #d85931, #da3029, #c92251),
              linear-gradient(to bottom, #121b47, #121b47);
            font-family: "Poppins";
            font-size: 72.5px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.12;
            letter-spacing: normal;
            text-align: center;
            color: #121b47;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        > img {
          width: 243px;
          border-radius: 16px;
          box-shadow: 0px 42px 79px 0 rgba(0, 0, 0, 0.16);
          background-color: #fff;
        }
      }
    }
  }
`;
