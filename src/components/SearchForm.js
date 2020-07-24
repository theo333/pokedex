import React, { useState, useContext } from 'react';
import { PokedexContext } from '../context/PokedexContext';

const SearchForm = () => {
	const [nameSearch, setNameSearch] = useContext(PokedexContext);
	const [name, setName] = useState('');

	const handleSubmit = ev => {
		ev.preventDefault();
		setNameSearch(name);
		// setName('');
	};

	console.log('name, nameSearch: ', name, nameSearch);
	// TODO error handling - here or in Card???
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