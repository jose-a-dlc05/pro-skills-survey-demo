import { InputGroup, FormControl } from 'react-bootstrap';

const InputField = ({ inputname, placeholder }) => {
	return (
		<InputGroup className='mb-3'>
			<InputGroup.Text
				id='inputGroup-sizing-default'
				className='skills-input header'
			>
				{inputname}
			</InputGroup.Text>
			<FormControl
				aria-label='Default'
				aria-describedby='inputGroup-sizing-default'
				type='text'
				placeholder={placeholder}
				className='skills-input form'
			/>
		</InputGroup>
	);
};

export default InputField;
