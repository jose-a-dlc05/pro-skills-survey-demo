import React, { useState, useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import Card from '../Card/Card.component';

const Cards = ({ skills, updateSkills }) => {
	const [skillsObject, setSkillsObject] = useState(skills);
	const handleSkillsChange = (skills) => {
		// console.log('Card Skill ->', skills);
		let objectName = skills.skillName;
		const { deptRange, orgRange, importanceRange } = skills;
		let updatedData = {
			...skillsObject,
			[objectName]: {
				department: deptRange,
				organization: orgRange,
				self: importanceRange,
			},
		};
		setSkillsObject(updatedData);
		updateSkills(updatedData);
	};

	return (
		<Stack gap={3}>
			<div
				className='bg-light border'
				style={{
					width: '90%',
					margin: '0 auto',
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
				}}
			>
				{Object.entries(skillsObject).map(([key, value]) => (
					<Card
						key={key}
						skill={[key, value]}
						handleSkillsChange={handleSkillsChange}
					/>
				))}
			</div>
		</Stack>
	);
};

export default Cards;
