import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .first-section {
    display: flex;
    align-items: flex-end;
    margin: 0 10px 0 20px;
    height: 230px;

    @media (min-width: 768px) {
      margin: 0 35px 0 24px;
      height: 300px;
    }

    @media (min-width: 1024px) {
      margin: 0 100px 0 80px;
			height: 500px;
    }

    @media (min-width: 1440px) {
      height: 690px;
    }

    img {
      display: flex;
      width: 100%;
      max-width: 83px;
      box-shadow: 0px 13px 21px 0 rgba(0, 0, 0, 0.16);

      @media (min-width: 1024px) {
        max-width: 243px;
        box-shadow: 0px 42px 79px 0 rgba(0, 0, 0, 0.16);
      }
    }
  }

  .second-section {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 899px;

    .Palavra-copiar {
      background-image: linear-gradient(to top, #d85931, #da3029, #c92251),
        linear-gradient(to bottom, #121b47, #121b47);
      font-family: "Poppins";
      font-size: 66px;
      font-weight: bold;
      color: #121b47;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
      animation: go-back 0.5s infinite alternate;

      @keyframes go-back {
        from {
          transform: translateX(5px);
        }
        to {
          transform: translateX(0);
        }
      }

      @media (min-width: 768px) {
        font-size: 88px;
      }

      @media (min-width: 1024px) {
        font-size: 120px;
      }

      @media (min-width: 1440px) {
        font-size: 224px;
      }
    }

    h1 {
      margin: 0;
      font-size: 18px;
      font-family: "Poppins";

      @media (min-width: 768px) {
        font-size: 24px;
      }

      @media (min-width: 1024px) {
        font-size: 42px;
      }

      @media (min-width: 1440px) {
        font-size: 66px;
      }
    }

    p {
      text-align: center;
      margin-top: 25px;
      font-size: 9px;
      color: #4b4545;
      font-family: "Poppins";
      width: 200px;

      @media (min-width: 768px) {
        font-size: 12px;
        line-height: 1.73;
				width: 600px;
      }

      @media (min-width: 1024px) {
        font-size: 16px;
        line-height: 1.6;
      }

      @media (min-width: 1440px) {
        line-height: 2.03;
        font-size: 20.6px;
      }
    }
  }

  .tird-section {
    display: flex;
    align-items: start;
    justify-content: end;
    margin: 0 12px 0 15px;

    @media (min-width: 768px) {
      margin: 0 105px 0 35px;
    }

    @media (min-width: 1024px) {
      margin: 0 80px 0 140px;
    }

    img {
      display: flex;
      width: 100%;
      max-width: 83px;
      margin-top: 60px;
      box-shadow: 0px 13px 21px 0 rgba(0, 0, 0, 0.16);

      @media (min-width: 1024px) {
        max-width: 243px;
        margin-top: 80px;
        box-shadow: 0px 42px 79px 0 rgba(0, 0, 0, 0.16);
      }

      @media (min-width: 1440px) {
        max-width: 243px;
        margin-top: 160px;
      }
    }
  }
`;
