import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;

  > .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #fd4111;
    height: 250px;

    @media (min-width: 1024px) {
      height: 865px;
    }

    > .content {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
			margin: 380px 150px 0 0;

      > h2 {
        font-size: 8px;
        width: 110px;
        margin: 0 13px 18px 0;
        font-family: "Poppins";
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.24;
        letter-spacing: normal;
        text-align: left;
        color: #fff;

        @media (min-width: 1024px) {
          width: 514px;
          height: 77px;
          margin: 0 13px 128px 0;
          font-size: 37px;
        }
      }
    }

    > .carousel {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`;
