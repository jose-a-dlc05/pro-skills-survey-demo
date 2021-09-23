import React from 'react';
import { Stack, Card, Form } from 'react-bootstrap';

const Cards = ({ skill }) => {
	return (
		<Stack gap={3}>
			<div className='bg-light border'>
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
						<Form>
							{['radio'].map((type) => (
								<div
									key={`inline-${type}`}
									className='mb-3'
									style={{ display: 'flex', justifyContent: 'space-between' }}
								>
									<Form.Check
										inline
										label='0'
										name='group1'
										type={type}
										id={`inline-${type}-1`}
									/>
									<Form.Check
										inline
										label='1'
										name='group1'
										type={type}
										id={`inline-${type}-2`}
									/>
									<Form.Check
										inline
										label='2'
										type={type}
										id={`inline-${type}-3`}
									/>
									<Form.Check
										inline
										label='3'
										type={type}
										id={`inline-${type}-3`}
									/>
									<Form.Check
										inline
										label='4'
										type={type}
										id={`inline-${type}-3`}
									/>
									<Form.Check
										inline
										label='5'
										type={type}
										id={`inline-${type}-3`}
									/>
								</div>
							))}
						</Form>
						<Card.Text>Level at the organization</Card.Text>
						<Form>
							{['radio'].map((type) => (
								<div
									key={`inline-${type}`}
									className='mb-3'
									style={{ display: 'flex', justifyContent: 'space-between' }}
								>
									<Form.Check
										inline
										label='0'
										name='group1'
										type={type}
										id={`inline-${type}-1`}
									/>
									<Form.Check
										inline
										label='1'
										name='group1'
										type={type}
										id={`inline-${type}-2`}
									/>
									<Form.Check
										inline
										label='2'
										type={type}
										id={`inline-${type}-3`}
									/>
									<Form.Check
										inline
										label='3'
										type={type}
										id={`inline-${type}-3`}
									/>
									<Form.Check
										inline
										label='4'
										type={type}
										id={`inline-${type}-3`}
									/>
									<Form.Check
										inline
										label='5'
										type={type}
										id={`inline-${type}-3`}
									/>
								</div>
							))}
						</Form>
						<Card.Text>Level within the department</Card.Text>
						<Form>
							{['radio'].map((type) => (
								<div
									key={`inline-${type}`}
									className='mb-3'
									style={{ display: 'flex', justifyContent: 'space-between' }}
								>
									<Form.Check
										inline
										label='0'
										name='group1'
										type={type}
										id={`inline-${type}-1`}
									/>
									<Form.Check
										inline
										label='1'
										name='group1'
										type={type}
										id={`inline-${type}-2`}
									/>
									<Form.Check
										inline
										label='2'
										type={type}
										id={`inline-${type}-3`}
									/>
									<Form.Check
										inline
										label='3'
										type={type}
										id={`inline-${type}-3`}
									/>
									<Form.Check
										inline
										label='4'
										type={type}
										id={`inline-${type}-3`}
									/>
									<Form.Check
										inline
										label='5'
										type={type}
										id={`inline-${type}-3`}
									/>
								</div>
							))}
						</Form>
					</Card.Body>
				</Card>
			</div>
		</Stack>
	);
};

export default Cards;
