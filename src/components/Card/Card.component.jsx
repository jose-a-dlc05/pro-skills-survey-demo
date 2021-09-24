import React from 'react';
import { Card } from 'react-bootstrap';
import MultiSlider from '../MultiSlider/MultiSlider.component';

function SkillCard({ skill }) {
	return (
		<Card
			style={{
				width: '18rem',
				margin: '0 auto',
				border: '1px solid black',
				borderRadius: '10px',
				padding: '2em',
			}}
		>
			<Card.Body>
				<Card.Title
					style={{
						fontWeight: 'bold',
						fontSize: '1.2em',
						textDecoration: 'underline',
					}}
				>
					{skill}
				</Card.Title>
				<Card.Text>Important to Organization</Card.Text>
				<MultiSlider />
				<Card.Text>Level at the organization</Card.Text>
				<MultiSlider />
				<Card.Text>Level within the department</Card.Text>
				<MultiSlider />
			</Card.Body>
		</Card>
	);
}

export default SkillCard;
