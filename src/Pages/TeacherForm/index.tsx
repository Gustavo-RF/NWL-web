import React, { useState } from 'react';

import WarningIcon from '../../assets/images/icons/warning.svg';
import PageHeader from '../../Components/PageHeader';
import Input from '../../Components/Input';

import './styles.css';
import Textarea from '../../Components/Textarea';
import Select from '../../Components/Select';

function TeacherForm() {
	const [scheduleItems, setScheduleItems] = useState([
		{ week_day: 0, from: '', to: '' },
	])

	function addNewScheduleItem() {
		setScheduleItems([
			...scheduleItems,
			{
				week_day: 0,
				from: '',
				to: '',
			}
		])
	}
	
	return (
		<div id="page-teacher-form" className="container">
			<PageHeader title="Que incrível que você quer dar aulas"
				description="O primeiro passo é preencher esse formulário de inscrição"
			  />

			<main>
				<fieldset>
					<legend>Seus dados</legend>
					
					<Input name="name" label="Nome completo" />
					<Input name="avatar" label="Avatar" />
					<Input name="whatsapp" label="Whatsapp" />
					<Textarea name="bio" label="Biografia" />

				</fieldset>

				<fieldset>
					<legend>Sobre a aula</legend>
					<Select name="subject" label="Matéria" 
						options={[
							{value: 'Artes', label: 'Artes'},
							{value: 'Biologia', label: 'Biologia'},
							{value: 'Ciências', label: 'Ciências'},
							{value: 'Educação Física', label: 'Educação Física'},
						]}>
					</Select>
					<Input name="cost" label="Custo da sua hora por aula" />

				</fieldset>

				<fieldset>
					<legend>
						Horários disponíveis
						<button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
					</legend>
					
					{
						scheduleItems.map(scheduleItem => {
							return (
								<div key={scheduleItem.week_day} className="schedule-item">
									<Select name="week_day" label="Dia da semana" 
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
									<Input name="from" label="Das" type="time" />
									<Input name="to" label="até" type="time" />
								</div>
							)
						})
					}

				</fieldset>

				<footer>
					<p>
						<img src={WarningIcon} alt="Aviso importante"/>
						Importante! <br />
						Preencha todos os dados
					</p>

					<button type="button">
						Salvar cadastro
					</button>
				</footer>
			</main>
		</div>
	)
}

export default TeacherForm;