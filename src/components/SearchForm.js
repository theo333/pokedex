import React, { useState, useContext } from 'react';
import { PokedexContext } from '../context/PokedexContext';

const SearchForm = () => {
	const [nameSearch, setNameSearch] = useContext(PokedexContext);
	const [name, setName] = useState('');

	const handleSubmit = ev => {
		ev.preventDefault();
		console.log(name, nameSearch);
		setNameSearch(name);
	}
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
	)
};

export default SearchForm;