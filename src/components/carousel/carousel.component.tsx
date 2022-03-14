// Dependencies
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Styles
import { Container } from "./carousel.styles";

// Components
import CardInfo from "../card-info/card-info.component";

// Utils
import { ICardInfoMock } from "../../utils/mocks/card-info.mock";

SwiperCore.use([Navigation, Pagination]);

const Carrousel: React.FC = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation
      >
        {ICardInfoMock.map((item) => (
          <SwiperSlide key={item.id}>
            <CardInfo
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carrousel;
