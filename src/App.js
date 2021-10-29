import React, { useState } from 'react';
import db from './firebase-config';
import { setDoc, doc } from '@firebase/firestore';
import { Container, Row, Col } from 'react-bootstrap';
import InputField from './components/InputField/InputField.component';
import Cards from './components/Cards/Cards.component';
import Button from './components/Button/Button.component';
import { v4 } from 'uuid';
import { initSurvey } from './initSurvey';

import './App.css';

function App() {
	const [inputState, setInputState] = useState({
		username: '',
		email: '',
		orgName: 'Tektronix',
		deptName: 'Team',
	});
	const [skills, setSkills] = useState(initSurvey.user.skills);
	const [surveyFinished, setSurveyFinished] = useState(false);

	// Changes the fields on change based on the input field name
	const onChange = (e) => {
		const { name, value } = e.target;
		setInputState((prevState) => ({ ...prevState, [name]: value }));
	};

	// Returns all values back to initial state
	const clearState = () => {
		setInputState({
			username: '',
			email: '',
			orgName: 'Tektronix',
			deptName: '',
		});
		setSkills(initSurvey.user.skills);
	};

	// Calls skillsObject from Cards Component
	const updateSkills = (skillsObject) => setSkills(skillsObject);

	// Submit Data to Firebase
	const handleSubmit = async (e) => {
		e.preventDefault();
		const surveys = {
			user: {
				user_name: inputState.username,
				org_name: inputState.orgName,
				dept_name: inputState.deptName,
				email: inputState.email,
				skills: skills,
			},
		};
		await setDoc(doc(db, 'surveys', v4()), surveys);
		clearState();
		setSurveyFinished(true);
	};
	if (surveyFinished === false) {
		return (
			<Container fluid className='App'>
				<Row>
					<Col>
						<h1>Fortive9 Skills Survey</h1>

						<InputField
							inputname='Name'
							placeholder='Enter name'
							value={inputState.username}
							name='username'
							type='text'
							onChange={onChange}
							maxlength='100'
						/>
						<br />
						<InputField
							inputname='Email'
							placeholder='Enter email address'
							value={inputState.email}
							name='email'
							onChange={onChange}
							type='email'
							maxlength='100'
						/>
						<br />
						<InputField
							inputname='Organization'
							placeholder='Tektronix'
							value={inputState.orgName}
							name='orgName'
							onChange={onChange}
							type='text'
							maxlength='100'
						/>
						<br />
						<InputField
							inputname='Your team'
							placeholder='Team'
							value={inputState.deptName}
							name='deptName'
							onChange={onChange}
							type='text'
							maxlength='100'
						/>
					</Col>
					<br />
					<h5 className='survey-description'>
						<ul>
							Use the scales to rate the importance or skill from 0 to 5 based
							on:
							<li>How significant it is to the organization</li>
							<li>
								What skill level do you think currently exists at the
								organization
							</li>
							<li>
								What skill level do you think currently exists within your
								department
							</li>
						</ul>
					</h5>
					<h5 className='subheader'>
						These skills are a subset of the Fortive9
					</h5>
					<Cards
						skills={skills}
						updateSkills={updateSkills}
						inputState={inputState}
					/>
				</Row>
				<Row>
					<Button buttonName='Submit' onClick={handleSubmit} />
				</Row>
			</Container>
		);
	} else {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
				}}
			>
				<h1>
					Thank you for taking this survey. <br /> You can close the browser.
				</h1>
			</div>
		);
	}
}

export default App;
