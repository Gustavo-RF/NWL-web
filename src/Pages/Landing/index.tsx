import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeart from '../../assets/images/icons/purple-heart.svg';
import './styles.css';

function Landing() {
	return (
		<div id="page-landing">
			<div id="page-landing-content" className="container">
				<div className="logo-container">
					<img src={LogoImg} alt="Proffy" />
					<h2>Sua plataforma de estudos online</h2>
				</div>
				<img src={LandingImg} className="hero-image" 
					alt="Plataforma de estudos" />
				
				<div className="buttons-container">
					<Link to="/study" className="study">
						<img src={StudyIcon} alt="Estudar" /> Estudar
					</Link>

					<Link to="/give-classes" className="give-classes">
						<img src={GiveClassesIcon} alt="Dar aulas" /> Dar aulas
					</Link>
				</div>

				<span className="total-connections">
					Total de 200 conexões já realizadas 
					<img src={PurpleHeart} alt="coracao" />
				</span>
			</div>
		</div>
	);
}

export default Landing;