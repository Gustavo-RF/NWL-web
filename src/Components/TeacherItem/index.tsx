import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

export interface Teacher {
	avatar: string;
	bio: string;
	cost: number;
	id: number;
	name: string;
	subject: string;
	user_id: number;
	whatsapp: string;
}

interface TeacherItemProps {
	teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
	return (
		<article key={teacher.id} className="teacher-item">
			<header>
				<img src={teacher.avatar} alt={teacher.name} />
				<div>
					<strong>{teacher.name}</strong>
					<span>{teacher.subject}</span>
				</div>
			</header>
			<p>
				{teacher.bio}
			</p>
			<footer>
				<p>Preço por hora <strong>R$ {teacher.cost},00</strong></p>
				<button type="button">
					<img src={WhatsappIcon} alt="whatsapp"/>
					Entrar em contato
				</button>
			</footer>
		</article>
	)
}

export default TeacherItem;