import React from 'react';
import { Stack } from 'react-bootstrap';
import Card from '../Card/Card.component';

const Cards = ({ skill }) => {
	return (
		<Stack gap={3}>
			<div className='bg-light border'>
				<Card skill={skill} />
			</div>
		</Stack>
	);
};

export default Cards;
