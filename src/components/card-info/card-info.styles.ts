import styled from "styled-components";

export const Container = styled.div`
  > .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 346px;
    height: 451px;
    border-radius: 16px;
    box-shadow: 0px 42px 79px 0 rgba(0, 0, 0, 0.16);
    background-color: #fff;
    cursor: pointer;

    > .radio-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 114px;
      height: 114px;

      margin-top: 38px;
      border-radius: 50%;
      box-shadow: 0px 14px 16px 0 rgba(227, 21, 62, 0.21);
      background-image: linear-gradient(to top, #e72028, #da3029, #c92251);

      > img {
        width: 52px;
        height: 52px;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h2 {
        width: 203px;
        height: 58px;
        margin: 29px 43px 15px 44px;
        font-family: "Poppins";
        font-size: 28px;
        font-weight: 700;
        font-style: 400;
        line-height: 1.18;
        text-align: center;
        color: #474747;
      }

      > .divider {
        display: flex;
        flex-direction: row;
        align-items: center;

        > .line {
          width: 40px;
          height: 9px;
          margin: 0 9px 0 0;
          border-radius: 4.5px;
          background-color: #fd4111;
        }

        > span {
          width: 9px;
          height: 9px;
          margin: 0 0 0 9px;
          border-radius: 4.5px;
          background-color: #fd4111;
        }
      }

      > p {
        padding: 24px 44px;
        margin: 0;
        font-family: "Poppins";
        font-size: 18px;
        font-weight: 400;
        font-style: 400;
        line-height: 1.47;
        letter-spacing: normal;
        color: #2b2b2b;
      }
    }
  }

  .container:hover {
    background-color: #2b2b2b;

    h2 {
      color: #fff;
    }

    p {
      color: #ededed;
    }
  }
`;
