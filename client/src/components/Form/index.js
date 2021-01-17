import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
	return (
		<div className='form-group'>
			<input type="text" className='form-control' {...props} />
		</div>
	);
}

// forwarding ref (alternatively you can also prop drill it): https://reactjs.org/docs/forwarding-refs.html)
export const ForwardRefInput = React.forwardRef((props, ref) => (
	<div className='form-group'>
		<input className='form-control' ref={ref} {...props} />
	</div>
));

export function TextArea(props) {
	return (
		<div className='form-group'>
			<textarea rows="2" className='form-control' {...props} />
		</div>
	);
}

export function FormBtn(props) {
	return (
		<button
			{...props}
			style={{ marginLeft: 10 }}
			className='btn btn-dark rounded-0'>
			{props.children}
		</button>
	);
}

export function Dropbox(props) {
	return (
		<div className='form-group'>
			<label>
				Category: 
			</label>
			<select id ="category" className="custom-select select-selected" defaultValue="" {...props}>
				<option value="0">Select an option (required)</option>
				<option value="art">Art</option>
				<option value="culinary">Culinary</option>
				<option value="exercise">Exercise</option>
				<option value="home">Home</option>
				<option value="music">Music</option>
				<option value="sports">Sports</option>
				<option value="technology">Technology</option>
				<option value="other">other</option>
			</select>
		</div>
	);
}