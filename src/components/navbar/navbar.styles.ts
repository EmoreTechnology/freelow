import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
  }

  img {
    width: 250px;
    margin: 10px;
  }

  .section {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    width: 100%;

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: center;
      width: 100%;
    }
  }

  a {
    font-size: 8px;
    text-decoration: none;
    font-family: "Poppins";
    color: #4b4545;
    padding: 5px 5px;
    border-radius: 19.5px;

    @media (min-width: 768px) {
      font-size: 12px;
      padding: 5px 15px;
      margin: 0;
    }
  }

  .links {
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;

    @media (min-width: 768px) {
      margin: 0 15px;
      width: 100%;
    }

    @media (min-width: 1024px) {
      width: 589px;
    }

    @media (min-width: 1440px) {
      width: 100%;
    }

    @media (min-width: 1820px) {
      margin: 0 185px;
    }

    a {
      font-size: 9px;
      text-decoration: none;
      font-family: "Poppins";
      color: #4b4545;
      padding: 5px 5px;
      border-radius: 19.5px;

      @media (min-width: 768px) {
        font-size: 12px;
        padding: 5px 15px;
        margin: 0;
      }

      @media (min-width: 1440px) {
        font-size: 19px;
      }

      :hover {
        background: #fbe8f0;
      }
    }
  }

  button {
    width: 100%;
    max-width: 80px;
    height: 23px;
    border: none;
    font-family: "Poppins";
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    border-radius: 21.5px;
    background-image: linear-gradient(to top, #d85931, #da3029, #c92251);
    margin-top: 8px;
    cursor: pointer;

    @media (min-width: 768px) {
      max-width: 177px;
      height: 43px;
      font-size: 16px;
      margin-top: 0;
    }
  }
`;
