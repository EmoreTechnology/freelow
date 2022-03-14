import styled from "styled-components";

export const Container = styled.div`
  display: revert;
  flex-direction: row;
  width: 100%;

    .swiper {
	    max-width: 1324px;
    }

    .swiper-wrapper {
			margin: 0 25px;
    }

    > .swiper-slide, .swiper-slide-next {
			filter: blur(3px);
		}
		
    .swiper-slide {
			display: flex;
      font-size: 6px;
			max-width: 668px;
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
    }

    .swiper-button-prev {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fd4111;
      border-radius: 4px;
      background-color: #fff;
      width: 48px;
      height: 48px;
    }

    .swiper-button-prev:hover {
      background-color: #2b2b2b;
    }

    .swiper-button-next {
			display: flex;
      align-items: center;
      justify-content: center;
      color: #fd4111;
      border-radius: 4px;
      background-color: #fff;
      width: 48px;
      height: 48px;
    }

    .swiper-button-next:hover {
      background-color: #2b2b2b;
    }
`;
