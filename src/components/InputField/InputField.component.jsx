import { InputGroup, FormControl } from 'react-bootstrap';

const InputField = ({
	inputname,
	placeholder,
	onChange,
	name,
	type,
	maxlength,
	value,
}) => {
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
				type={type}
				placeholder={placeholder}
				className='skills-input form'
				onChange={onChange}
				name={name}
				maxLength={maxlength}
				value={value}
			/>
		</InputGroup>
	);
};

export default InputField;
