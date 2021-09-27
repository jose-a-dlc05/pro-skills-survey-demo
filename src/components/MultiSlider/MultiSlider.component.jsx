import React, { useState, useRef } from 'react';
import './MultiSlider.styles.css';
import PropTypes from 'prop-types';

function MultiSlider({ min, max, onChange }) {
	// Creating the state variables
	const [minVal, setMinVal] = useState(min);
	const [maxVal, setMaxVal] = useState(max);

	// Creating the refs
	const minValRef = useRef(min);
	const maxValRef = useRef(max);

	return (
		<>
			<input
				type='range'
				min={minVal}
				max={maxVal}
				value={minVal}
				onChange={(event) => {
					const value = Math.min(
						Number(event.target.value),
						maxVal - setMinVal(value)
					);
					setMinVal(value);
					minValRef.current = value;
				}}
				className='thumb thumb--left'
				style={{ zIndex: (minVal > max - 100) & '5' }}
			/>
			<input
				type='range'
				min={minVal}
				max={maxVal}
				value={maxVal}
				onChange={(event) => {
					const value = Math.max(
						Number(event.target.value),
						minVal - setMaxVal(value)
					);
					maxValRef.current = value;
				}}
				className='thumb thumb--right'
			/>
			<div className='slider'>
				<div className='slider__track'></div>
				<div className='slider__range'></div>
			</div>
		</>
	);
}

MultiSlider.propTypes = {
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default MultiSlider;
