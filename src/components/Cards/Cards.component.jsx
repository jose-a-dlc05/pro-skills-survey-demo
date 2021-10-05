import React from 'react';
import { Stack } from 'react-bootstrap';
import Card from '../Card/Card.component';

const Cards = ({ skill }) => {
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
				<Card skill={skill} />
				<Card skill={skill} />
				<Card skill={skill} />
				<Card skill={skill} />
				<Card skill={skill} />
				<Card skill={skill} />
			</div>
		</Stack>
	);
};

export default Cards;
