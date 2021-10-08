import { InputGroup, FormControl } from 'react-bootstrap';

const InputField = ({ inputname, placeholder, onChange }) => {
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
				onChange={onChange}
			/>
		</InputGroup>
	);
};

export default InputField;
