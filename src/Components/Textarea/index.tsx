import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
	return (
		<div className="textarea-block">
			<label htmlFor={name}>{ label }</label>
			<textarea type="text" id={name} {...rest}></textarea>
		</div>
	)
}

export default Textarea;