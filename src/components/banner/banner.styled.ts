import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1336px;
  height: 449px;
  background-color: #fd4111;
  border-radius: 16px 24px 152px 16px;

  > .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-left: 96px;

    > h2 {
      width: 460px;
      height: 150px;
      font-family: "Poppins";
      font-size: 42px;
      font-weight: 700;
      font-style: 400;
      line-height: 1.24;
      letter-spacing: normal;
      text-align: left;
      color: #fff;

      > span {
        font-family: "Poppins";
        font-size: 42px;
        font-weight: 700;
        font-style: 400;
        line-height: 1.24;
        letter-spacing: normal;
        text-align: left;
        color: #00134d;
      }
    }

    > .buttons {
      display: flex;
      flex-direction: row;

      > button {
        display: flex;
        justify-content: center;
        width: 192px;
        height: 100%;
        padding: 10px 25px;
        font-family: "Poppins";
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: 400;
        line-height: 2.07;
        letter-spacing: 1.08px;
        text-align: left;
        color: #00134d;
        border-radius: 26.8px;
        border: solid 3px #000;
        background-color: transparent;
        cursor: pointer;

        :hover {
          color: #fff;
          background-image: linear-gradient(to top, #00134d, #c92251);
        }
      }

      > button + button {
        margin-left: 27px;
      }
    }
  }

  > img {
    max-width: 792px;
    max-height: 609px;
    position: relative;
    bottom: 24px;
    left: 54px;
  }
`;
