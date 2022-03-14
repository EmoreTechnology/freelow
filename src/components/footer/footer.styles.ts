import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #444444;
  margin-top: 30px;

  .container {
    display: flex;
    background: #444444;
    flex-direction: column;
    align-items: center;
    padding: 30px;

    @media (min-width: 768px) {
      align-items: start;
    }

    @media (min-width: 1440px) {
      padding: 120px 182px;
    }
  }

  img {
    width: 100%;
    max-width: 250px;
  }

  .content {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    max-width: 1221px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: start;

      > div + div {
        margin: 0 15px;
      }
    }

    @media (min-width: 1024px) {
      justify-content: space-between;
      padding-top: 20px;
    }
  }

  .first-section {
    display: flex;
    width: 100%;
    max-width: 214px;
    flex-direction: column;
    align-items: flex-start;

    span {
      width: 109px;
      color: #fff;
      font-size: 9px;
      margin: 0;
      text-align: start;

      @media (min-width: 1024px) {
        font-size: 11.5px;
        width: 160px;
      }

      @media (min-width: 1440px) {
        font-size: 13.5px;
      }
    }

    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 9px;
      width: 100%;
      color: #fff;
      border-radius: 26.8px;
      background-image: linear-gradient(to top, #d85931, #da3029, #c92251);
      border: none;
      margin-top: 7px;
      height: 20px;

      @media (min-width: 1024px) {
        width: 208px;
        height: 44px;
        font-size: 10.5px;
      }

      @media (min-width: 1440px) {
        font-size: 13.5px;
        width: 308px;
      }

      .message {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10px;
        height: 10px;
        background: #fff;
        border-radius: 50% 50% 20% 50%;
        margin-right: 10px;

        img {
          width: 6px;
        }
      }
    }
  }

  .second-section {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    align-items: center;

    @media (min-width: 768px) {
      margin: 0;
      align-items: start;
    }

    span {
      color: #fff;
      font-size: 9px;
      margin: 0;
      width: 100%;
      max-width: 150px;
      text-align: start;

      @media (min-width: 768px) {
        margin-left: 20px;
      }

      @media (min-width: 1024px) {
        font-size: 10.5px;
        max-width: 200px;
      }

      @media (min-width: 1440px) {
        font-size: 13.5px;
      }
    }

    .redes {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      margin-top: 8px;

      img {
        width: 15px;

        > img + img {
          margin: 0 8px;
        }
      }
    }
  }

  .tird-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 1440px) {
      align-items: start;
    }

    .texts {
      display: flex;
      width: 100%;
      align-items: start;
      flex-direction: column;
      max-width: 210px;
    }

    span {
      text-align: start;
      color: #fff;
      font-size: 9px;

      @media (min-width: 1024px) {
        font-size: 10.5px;
      }

      @media (min-width: 1440px) {
        font-size: 13.5px;
      }
    }

    .inputs {
      display: flex;
      border-radius: 13px;
      margin-top: 8px;
      border: solid 1px #d85931;
      background: transparent;
      border-radius: 8x;
      align-items: center;
      width: 100%;
      height: 25px;

      img {
        width: 12px;
        margin-left: 10px;
      }

      input {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        margin-left: 8px;
        border: none;
        background: transparent;

        @media (min-width: 1024px) {
          font-size: 10.5px;
        }

        @media (min-width: 1440px) {
          font-size: 10.5px;
          width: 236px;
          height: 39px;
        }

        ::placeholder {
          text-align: start;
          color: #fff;
          font-size: 9px;
        }
      }
    }

    .button {
      display: flex;
      width: 100%;
      justify-content: end;
      width: 210px;
    }

    button {
      align-items: end;
      margin-top: 10px;
      font-size: 9px;
      color: #fff;
      border-radius: 10px;
      background-image: linear-gradient(to top, #d85931, #da3029, #c92251);
      border: none;
      height: 20px;
      width: 50px;

      @media (min-width: 1024px) {
        width: 65px;
        height: 24px;
      }
    }
  }
`;
