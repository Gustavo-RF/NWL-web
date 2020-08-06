import React, { useState, FormEvent } from 'react';

import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import './styles.css';
import Input from '../../Components/Input';
import Select from '../../Components/Select';
import api from '../../services/api';


function TeacherList() {
	const [ subject, setSubject ] = useState('');
	const [ weekday, setWeekday ] = useState('');
	const [ time, setTime ] = useState('');

	const [ teachers, setTeachers ] = useState([]);

	async function searchTeachers(e: FormEvent) {
		e.preventDefault();

		const res = await api.get('/classes', {
			params: {
				subject,
				weekday,
				time
			}
		})

		setTeachers(res.data);

		console.log(res.data);
	}

	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os proffys disponíveis">
				<form id="search-teachers" onSubmit={searchTeachers}>
					<Select name="subject" label="Matéria" 
						value={subject} 
						onChange={(e) => {
							setSubject(e.target.value)
						}} 
						options={[
							{value: 'Artes', label: 'Artes'},
							{value: 'Biologia', label: 'Biologia'},
							{value: 'Ciências', label: 'Ciências'},
							{value: 'Educação Física', label: 'Educação Física'},
						]}>
					</Select>
					<Select name="weekday" label="Dia da semana" 
						value={weekday} 
						onChange={(e) => {
							setWeekday(e.target.value)
						}} 
						options={[
							{value: '0', label: 'Domingo'},
							{value: '1', label: 'Segunda-feira'},
							{value: '2', label: 'Terça-feira'},
							{value: '3', label: 'Quarta-feira'},
							{value: '4', label: 'Quinta-feira'},
							{value: '5', label: 'Sexta-feira'},
							{value: '6', label: 'Sábado'},
						]}>
					</Select>
					<Input label="Hora" name="time" type="time"
						value={time} 
						onChange={(e) => {
							setTime(e.target.value)
						}} />
					<button type="submit">Buscar</button>
				</form>
			</PageHeader>

			<main>
				{
					teachers.map((teacher: Teacher) => {
						return (
							<TeacherItem key={teacher.id} teacher={teacher} />
						);
					})
				}
			</main>
		</div>
	)
}

export default TeacherList;