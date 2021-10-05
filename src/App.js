import { Container, Row, Col } from 'react-bootstrap';
import InputField from './components/InputField/InputField.component';
import Cards from './components/Cards/Cards.component';
import Pagination from '../src/components/Pagination/SmallPagination.component';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

import './App.css';

function App() {
	return (
		<Container fluid className='App'>
			<Row>
				<Col>
					<h1>Professional Skills Survey</h1>
					<MDBProgress height='20' className='mdb-progress-container'>
						<MDBProgressBar
							width='25'
							valuemin={0}
							valuemax={100}
							className='mdb-progress-bar'
						>
							25%
						</MDBProgressBar>
					</MDBProgress>
					<InputField inputname='Name' placeholder='Enter your name' />
					<br />
					<InputField inputname='Company Name' placeholder='Enter org. name' />
					<br />
					<InputField inputname='Dept. Name' placeholder='Enter dept. name' />
				</Col>
				<br />
				<h4>
					Rate from a scale of <br />
					0 meaning unskilled/not important <br />
					5 meaning mastery/very <br />
					important the following skills:
					<br />
				</h4>
				<Cards
					skills={[
						'Accountability',
						'Analytical Skills',
						'Coaching',
						'Confidence',
						'Creativity',
						'Goal Setting',
						'Inspirational Abilities',
						'Mentorship',
						'Motivational Skills',
						'People Management',
						'Politeness',
						'Prioritization',
						'Project Management',
						'Stress Management',
					]}
				/>
			</Row>
			<Row>
				<Pagination />
				<button>Submit</button>
			</Row>
		</Container>
	);
}

export default App;
