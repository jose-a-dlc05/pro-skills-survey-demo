import React from 'react';
import './Button.style.css';

function Button({ buttonName, onClick }) {
	return (
		<button className='btn' onClick={onClick}>
			{buttonName}
		</button>
	);
}

export default Button;
