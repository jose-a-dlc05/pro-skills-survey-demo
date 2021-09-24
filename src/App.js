import { Container, Row, Col } from 'react-bootstrap';
import InputField from './components/InputField/InputField.component';
import Cards from './components/Cards/Cards.component';
import './App.css';

function App() {
	return (
		<Container fluid className='App'>
			<Row>
				<Col>
					<h1>Professional Skills Survey</h1>
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
				<Cards skill='Confidence' />
			</Row>
		</Container>
	);
}

export default App;
