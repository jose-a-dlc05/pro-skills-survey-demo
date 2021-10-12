import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Card from '../Card/Card.component';

const Cards = ({ skills }) => {
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
	};
	/**
	 * updatedData = {
	 * 	accountability: [2, 0, 4],
	 *  people management: [1, 3, 2],
	 *  confidence: [4, 2, 1]
	 * }
	 */
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
