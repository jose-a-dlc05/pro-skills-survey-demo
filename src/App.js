import { Container, Row, Col } from 'react-bootstrap';
import InputField from './components/InputField.component';
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
			</Row>
		</Container>
	);
}

export default App;
