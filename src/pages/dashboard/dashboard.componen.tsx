// Dependencies
import React from "react";

// Styles
import { Container } from "./dashboard.styles";

// Components
import Footer from "../../components/footer/footer.component";
import Freelow from "../../components/freelow/freelow.component";
import Header from "../../components/header/header.component";
import Navbar from "../../components/navbar/navbar.component";
import Player from "../../components/player/player.component";
import Banner from '../../components/banner/banner.component';
import SlideEvaluation from "../../components/slide-evaluation/slide-evaluation.component";
import Audio from "../../components/audio/audio.component";

// Utils
import { NavbarMock } from "../../utils/mocks/navbar.mock";
import { FooterMock } from "../../utils/mocks/footer.mock";

// Assets
import video from '../../assets/video.mp4';
import CardPlayer from "../../components/card-player/card-player.component";
import Exclusivities from "../../components/exclusivities/exclusivities.component";
import banner from '../../assets/banner-icon.png';
import image from "../../assets/image-card1.jpg";
import image2 from "../../assets/image-card2.jpg";

const Dashboard: React.FC = () => {
	return (
		<Container>
			<div className="navbar">
				<Navbar
					us={NavbarMock.us}
					hrefUs={NavbarMock.hrefUs}
					exclusivities={NavbarMock.exclusivities}
					hrefExclusivities={NavbarMock.hrefExclusivities}
					assessments={NavbarMock.assessments}
					hrefAssessments={NavbarMock.hrefAssessments}
					contact={NavbarMock.contact}
					hrefContact={NavbarMock.hrefContact}
					register={NavbarMock.register}
					hrefRegister={NavbarMock.hrefRegister}
				/>
			</div>

			<div className="header">
				<Header />
			</div>

			<a id="freelow" />
			<div className="freelow">
				<Freelow />
			</div>

			<div className="exclusivities">
				<div className="content">
					<div className="player">
						<Player src={video} />
					</div>

					<div className="card-player">
						<CardPlayer
							title="Ah, mas por que a gente?"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis ut metus luctus commodo. Cras hendrerit ipsum non ullamcorper volutpat. Donec eget quam enim."
						/>
					</div>
				</div>

				<a id="exclusivities" className="exclusivities" />
				<div className="wrapper">
					<Exclusivities />
				</div>
			</div>

			<a id="register" />
			<div className="banner">
				<Banner
					firstDescription='Partiu Freelar? Criada para'
					decorated=' criativos e empresas'
					lastDescription=', Freelow.'
					thumbnail={banner}
				/>
			</div>

			<a id="evaluation" className="evaluation" />
			<div className="evaluation">
				<div className="first-section">

					<Audio appeareance="0 80px 80px 0" />

					<img className="card" src={image} alt="" />
				</div>
				<div className="content">
					<div className="wrapper">
						<h2>
							<span>O que estão</span>
							falando sobre mim
						</h2>

						<img src={image2} alt="" />
					</div>

					<SlideEvaluation />
				</div>

			</div>


			<a id="contact" className="contact" />
			<div className="footer">
				<Footer
					title={FooterMock.title}
					contactUs={FooterMock.contactUs}
					newsFirst={FooterMock.newsFirst}
					newsLast={FooterMock.newsLast}
					seeNetwork={FooterMock.seeNetwork}
				/>
			</div>
		</Container>
	);
}

export default Dashboard;