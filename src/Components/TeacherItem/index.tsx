import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img src="https://avatars3.githubusercontent.com/u/15891351?s=460&u=ccd24d483ef44e3b3a05b17247987eb5a9a42e18&v=4" alt="Gustavo Ramaldes" />
				<div>
					<strong>Gustavo Ramaldes</strong>
					<span>Física</span>
				</div>
			</header>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				<br/><br/> 
				Delectus, esse nostrum voluptatum amet odit nihil saepe exercitationem. Facere sed aut blanditiis enim eos. Eligendi, minima ipsa! Officia quam ut mollitia!
			</p>
			<footer>
				<p>Preço por hora <strong>R$ 50,00</strong></p>
				<button type="button">
					<img src={WhatsappIcon} alt="whatsapp"/>
					Entrar em contato
				</button>
			</footer>
		</article>
	)
}

export default TeacherItem;