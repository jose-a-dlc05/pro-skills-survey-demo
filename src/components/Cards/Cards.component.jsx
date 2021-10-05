import React from 'react';
import { Stack } from 'react-bootstrap';
import Card from '../Card/Card.component';

const Cards = ({ skills }) => {
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
				{skills.map((skill) => (
					<Card key={skill.id} skill={skill} />
				))}
			</div>
		</Stack>
	);
};

export default Cards;
