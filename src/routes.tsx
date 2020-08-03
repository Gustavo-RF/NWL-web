import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import TeacherList from './Pages/TeacherList';
import TeacherForm from './Pages/TeacherForm';

function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" component={Landing} exact></Route>
			<Route path="/study" component={TeacherList}></Route>
			<Route path="/give-classes" component={TeacherForm}></Route>
		</BrowserRouter>
	)
}

export default Routes;