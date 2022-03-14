import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 42px 79px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  border-radius: 50px;
  max-width: 815px;
  padding: 20px 40px;

  > img {
    width: 120px;
    height: 120px;
  }

  > .content {
    display: flex;

    flex-direction: column;
    width: 100%;

    > .icon-red {
      width: 44px;
      height: 44px;
    }

    > h2 {
      width: 141px;
      height: 18px;
      margin: 0 218px 14px 216px;
      font-family: "Poppins";
      font-size: 21px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.29;
      letter-spacing: normal;
      text-align: center;
      color: #121b47;
    }

    > span {
      width: 99px;
      height: 15px;
      margin: 14px 236px 18px 240px;
      font-family: "Poppins";
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 3.43;
      letter-spacing: normal;
      text-align: center;
      color: #d12b40;
    }

    > p {
      width: 569px;
      height: 142px;
      margin: 18px 6px 87px 0;
      font-family: "Poppins";
      font-size: 19.5px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.03;
      letter-spacing: 1.17px;
      text-align: center;
      color: #4b4545;
    }
  }

  > .icon-gray {
    width: 48px;
    height: 48px;
  }
`;
