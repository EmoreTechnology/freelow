import React from 'react';
import { IBannerProps } from '../../utils/models/banner.model';

import { Container } from './banner.styled';

const Banner: React.FC<IBannerProps> = ({ thumbnail, firstDescription, decorated, lastDescription }) => {
	return (
		<Container>
			<div className="container">
				<h2>
					{firstDescription}
					<span>{decorated}</span>
					{lastDescription}
				</h2>

				<div className="buttons">
					<button>
						Sou Freelancer
					</button>

					<button>
						Quero Contratar
					</button>
				</div>
			</div>

			<img src={thumbnail} alt="" />
		</Container>
	);
}

export default Banner;