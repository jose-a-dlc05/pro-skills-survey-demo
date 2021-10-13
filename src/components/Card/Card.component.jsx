import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { MDBRange } from 'mdb-react-ui-kit';
import './Card.styles.css';

function SkillCard({ skill, handleSkillsChange }) {
	const [skillName, setSkillName] = useState(skill[0]);
	const [importanceRange, setImportanceRange] = useState(skill[1].self);
	const [orgRange, setOrgRange] = useState(skill[1].organization);
	const [deptRange, setDeptRange] = useState(skill[1].department);

	const onChangeImportance = (e) => {
		setImportanceRange(Number(e.target.value));
		// changeScore();
	};
	const onChangeOrg = (e) => {
		setOrgRange(Number(e.target.value));
		// changeScore();
	};
	const onChangeDepartment = (e) => {
		setDeptRange(Number(e.target.value));
		// changeScore();
	};

	useEffect(() => {
		const updatedSkill = {
			skillName,
			importanceRange,
			orgRange,
			deptRange,
		};
		handleSkillsChange(updatedSkill);
	}, [importanceRange, orgRange, deptRange]);

	return (
		<Card
			style={{
				width: '18rem',
				margin: '0 auto',
				border: '1px solid black',
				borderRadius: '10px',
				padding: '2em',
				marginTop: '10px',
			}}
		>
			<Card.Body>
				<Card.Title
					style={{
						fontWeight: 'bold',
						fontSize: '1.2em',
						textDecoration: 'underline',
						marginBottom: '10px',
					}}
				>
					{`${skillName.charAt(0).toUpperCase()}${skillName.slice(1)}`}
				</Card.Title>
				<MDBRange
					value={importanceRange}
					min='0'
					max='5'
					step='1'
					id='skillsRange1'
					label='Important to Organization'
					className='range--slider'
					onChange={onChangeImportance}
				/>
				<MDBRange
					value={orgRange}
					min='0'
					max='5'
					step='1'
					id='skillsRange2'
					label='Level at the organization'
					className='range--slider'
					onChange={onChangeOrg}
				/>
				<MDBRange
					value={deptRange}
					min='0'
					max='5'
					step='1'
					id='skillsRange3'
					label='Level within the department'
					className='range--slider'
					onChange={onChangeDepartment}
				/>
			</Card.Body>
		</Card>
	);
}

export default SkillCard;
