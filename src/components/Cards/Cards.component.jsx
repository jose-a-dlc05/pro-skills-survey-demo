import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Card from '../Card/Card.component';
import map from 'lodash/map';

const Cards = ({ skills, handleDataChange }) => {
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
				{Object.entries(skills).map(([key, value]) => (
					<Card skill={[key, value]} />
				))}
			</div>
		</Stack>
	);
};

export default Cards;
