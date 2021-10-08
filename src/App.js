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
	const [range, setRange] = useState([]);

	useEffect(() => {
		const getSurveys = async () => {
			const data = await getDocs(surveyCollectionRef);
			console.log(data.docs[0].data().user.data[0]);
		};

		// getSurveys();
		console.log(survey);
	});

	const onInputUserNameChange = (event) => {
		const newValue = event.currentTarget.value;
		setUserName(newValue);
	};
	const onInputOrgNameChange = (event) => {
		const newValue = event.currentTarget.value;
		setOrgName(newValue);
	};
	const onInputDeptNameChange = (event) => {
		const newValue = event.currentTarget.value;
		setDeptName(newValue);
	};

	const onInputRangeChange = (event) => {
		const newValue = event.currentTarget.value;
		setRange(newValue);
	};

	// Submit Data to Firebase
	const handleSubmit = (e) => {
		e.preventDefault();
		setSurvey((prevSurvey) => ({
			...prevSurvey,
			user: {
				user_name: userName,
				org_name: orgName,
				dept_name: deptName,
				data: [
					{
						confidence: [0, 0, 0],
						'people management': [0, 0, 0],
						accountability: [0, 0, 0],
						prioritization: [0, 0, 0],
						'motivational skills': [0, 0, 0],
						coaching: [0, 0, 0],
						'project management': [0, 0, 0],
						'analytical skills': [0, 0, 0],
						creativity: [0, 0, 0],
						mentorship: [0, 0, 0],
						'inspirational abilities': [0, 0, 0],
						'goal setting': [0, 0, 0],
						'stress management': [0, 0, 0],
						politeness: [0, 0, 0],
						cooperation: [0, 0, 0],
						reliability: [0, 0, 0],
						'helping others': [0, 0, 0],
						friendliness: [0, 0, 0],
						influential: [0, 0, 0],
						respectful: [0, 0, 0],
						tolerant: [0, 0, 0],
						'team player': [0, 0, 0],
						collaborative: [0, 0, 0],
						'self awareness': [0, 0, 0],
						empathy: [0, 0, 0],
						initiative: [0, 0, 0],
						conscientiousness: [0, 0, 0],
						'self regulation': [0, 0, 0],
						trustworthiness: [0, 0, 0],
						sympathy: [0, 0, 0],
						'plan creation': [0, 0, 0],
						delegation: [0, 0, 0],
						'detail oriented': [0, 0, 0],
						punctuality: [0, 0, 0],
						'time management': [0, 0, 0],
						'resource distribution': [0, 0, 0],
						dependability: [0, 0, 0],
						adaptability: [0, 0, 0],
						'open mindedness': [0, 0, 0],
						'critical thinking': [0, 0, 0],
						patience: [0, 0, 0],
						perceptiveness: [0, 0, 0],
						'conflict resolution': [0, 0, 0],
						etiquette: [0, 0, 0],
						advocacy: [0, 0, 0],
						networking: [0, 0, 0],
						'business writing': [0, 0, 0],
						'customer service': [0, 0, 0],
						facilitation: [0, 0, 0],
						kindness: [0, 0, 0],
						respect: [0, 0, 0],
						clarity: [0, 0, 0],
						'active listening': [0, 0, 0],
						negotiation: [0, 0, 0],
						articulate: [0, 0, 0],
					},
				],
			},
		}));
		// await setDoc(doc(db, 'survey', v4()), survey);
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
					onChange={onInputRangeChange}
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
