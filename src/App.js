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
	const [initialInputState, setInputState] = useState({
		username: '',
		email: '',
		orgName: '',
		deptName: '',
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
		setInputState({ username: '', email: '', orgName: '', deptName: '' });
		setSkills(initSurvey.user.skills);
	};

	// Calls skillsObject from Cards Component
	const updateSkills = (skillsObject) => setSkills(skillsObject);

	// Submit Data to Firebase
	const handleSubmit = async (e) => {
		e.preventDefault();
		const surveys = {
			user: {
				user_name: initialInputState.username,
				org_name: initialInputState.orgName,
				dept_name: initialInputState.deptName,
				email: initialInputState.email,
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
						<h1>Professional Skills Survey</h1>

						<InputField
							inputname='Name'
							placeholder='Enter name'
							value={initialInputState.username}
							name='username'
							type='text'
							onChange={onChange}
							maxlength='100'
						/>
						<br />
						<InputField
							inputname='Email'
							placeholder='Enter email address'
							value={initialInputState.email}
							name='email'
							onChange={onChange}
							type='email'
							maxlength='100'
						/>
						<br />
						<InputField
							inputname='Company Name'
							placeholder='Enter org. name'
							value={initialInputState.orgName}
							name='orgName'
							onChange={onChange}
							type='text'
							maxlength='100'
						/>
						<br />
						<InputField
							inputname='Dept. Name'
							placeholder='Enter dept. name'
							value={initialInputState.deptName}
							name='deptName'
							onChange={onChange}
							type='text'
							maxlength='100'
						/>
					</Col>
					<br />
					<h3>
						Use the scales to rate the importance or skill from 0 to 5 based on:{' '}
						<br />
						{'->'} How significant it is to the organization
						<br />
						{'->'} What skill level do you think currently exists at the
						organization
						<br />
						{'->'} What skill level do you think currently exists within your
						department
					</h3>
					<Cards skills={skills} updateSkills={updateSkills} />
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
