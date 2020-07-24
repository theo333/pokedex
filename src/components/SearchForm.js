import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
	const [name, setName] = useState('');

	// handles submit for form
	const handleSubmit = ev => {
		ev.preventDefault();
		onSubmit(name.toLowerCase());

		// clears input field
		setName('');
	};

	return (
		<form onSubmit={handleSubmit} className='search-form'>
			<input
				className=''
				type='text'
				name='name'
				value={name}
				aria-label='Search'
				aria-placeholder='enter Pokemon name'
				placeholder='enter Pokemon name'
				role='searchbox'
				onChange={e => setName(e.target.value)}
			/>
			<button type='submit'>
				Search
			</button>
		</form>
	);
};

export default SearchForm;