import React, { useState, useEffect } from 'react';
import db from './firebase-config';
import { collection, getDocs, setDoc, doc } from '@firebase/firestore';
import { Container, Row, Col } from 'react-bootstrap';
import InputField from './components/InputField/InputField.component';
import Cards from './components/Cards/Cards.component';
import Pagination from '../src/components/Pagination/SmallPagination.component';
import Button from './components/Button/Button.component';
import { v4 } from 'uuid';
// import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

import './App.css';
import { initSurvey } from './initSurvey';

function App() {
	const surveyCollectionRef = collection(db, 'survey');
	const [userName, setUserName] = useState('');
	const [orgName, setOrgName] = useState('');
	const [deptName, setDeptName] = useState('');
	const [survey, setSurvey] = useState(initSurvey);

	useEffect(() => {
		const getSurveys = async () => {
			const data = await getDocs(surveyCollectionRef);
			console.log(data.docs[0].data().user.data[0]);
		};

		getSurveys();
	});

	const onInputUserNameChange = (event) => {
		const newValue = event.target.value;
		setUserName(newValue);
	};
	const onInputOrgNameChange = (event) => {
		const newValue = event.target.value;
		setOrgName(newValue);
	};
	const onInputDeptNameChange = (event) => {
		const newValue = event.target.value;
		setDeptName(newValue);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await setDoc(doc(db, 'survey', v4()), survey);
	};

	return (
		<Container fluid className='App'>
			<Row>
				<Col>
					<h1>Professional Skills Survey</h1>
					{
						// <MDBProgress height='20' className='mdb-progress-container'>
						// 	<MDBProgressBar
						// 		width='25'
						// 		valuemin={0}
						// 		valuemax={100}
						// 		className='mdb-progress-bar'
						// 	>
						// 		25%
						// 	</MDBProgressBar>
						// </MDBProgress>
					}

					<InputField
						inputname='Name'
						placeholder='Enter your name'
						value={userName}
						name='userName'
						onChange={onInputUserNameChange}
					/>
					<br />
					<InputField
						inputname='Company Name'
						placeholder='Enter org. name'
						value={orgName}
						name='orgName'
						onChange={onInputOrgNameChange}
					/>
					<br />
					<InputField
						inputname='Dept. Name'
						placeholder='Enter dept. name'
						value={deptName}
						name='deptName'
						onChange={onInputDeptNameChange}
					/>
				</Col>
				<br />
				<h3>
					Rate from a scale of <br />
					0 meaning unskilled/not important <br />
					5 meaning mastery/very <br />
					important the following skills:
					<br />
				</h3>
				<Cards
					skills={Object.keys(survey.user.data[0]).map(
						(key) => key.charAt(0).toUpperCase() + key.slice(1)
					)}
				/>
			</Row>
			<Row>
				<Pagination />
				<Button onClick={handleSubmit} buttonName='Submit' />
			</Row>
		</Container>
	);
}

export default App;
