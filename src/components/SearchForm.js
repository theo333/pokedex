import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
	const [name, setName] = useState('');

	const handleSubmit = ev => {
		ev.preventDefault();
		onSubmit(name);
		setName('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className=''
				type='text'
				name='name'
				value={name}
				aria-label='Search'
				onChange={e => setName(e.target.value)}
			/>
			<button type='submit'>
				Search
			</button>
		</form>
	);
};

export default SearchForm;