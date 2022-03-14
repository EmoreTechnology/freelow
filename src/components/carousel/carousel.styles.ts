import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
	height: 125%;

	.swiper {
		width: 1233px;
    height: 100%;

    @media (min-width: 1024px) {
      max-width: 1515px;
    }
  }

  .swiper-wrapper {
    margin: 0 28px;
    > div {
      margin-right: 0px;
    }
  }

  .swiper-slide {
    display: flex;
    text-align: center;
    background: #fff;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-color: transparent;
    max-width: 110px;

    @media (min-width: 1024px) {
      max-width: 396px;
      font-size: 18px;
    }
  }

  .swiper-button-prev {
    color: #fd4111;
    border-radius: 12px;
    background-color: #fff;

    @media (min-width: 1024px) {
      padding: 20px 24px;
    }
  }

  .swiper-button-prev:hover {
    background-color: #2b2b2b;
  }

  .swiper-button-next {
    color: #fd4111;
    border-radius: 12px;
    background: #fff;

    @media (min-width: 1024px) {
      padding: 20px;
    }
  }

  .swiper-button-next:hover {
    background-color: #2b2b2b;
  }
`;
