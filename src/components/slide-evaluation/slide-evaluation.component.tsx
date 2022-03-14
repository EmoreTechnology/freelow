// Dependencies
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Styles
import { Container } from "./slide-evaluation.styles";

// Components
import CardEvaluation from "../card-evaluation/card-evaluation.component";

// Utils
import { CardEvaluationMock } from "../../utils/mocks/card-evaluation.mock";

SwiperCore.use([Navigation, Pagination]);

const SlideEvaluation: React.FC = () => {
	return (
		<Container>
			<Swiper
				slidesPerView={2}
				spaceBetween={58}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination, Navigation]}
				navigation
			>
				{CardEvaluationMock.map((item) => (
					<SwiperSlide key={item.id}>
						<CardEvaluation
							name={item.name}
							profession={item.profession}
							description={item.description}
							thumbnail={item.thumbnail}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
};

export default SlideEvaluation;
